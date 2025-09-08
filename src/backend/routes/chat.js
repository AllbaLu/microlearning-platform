const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();


router.get("/chat", async(req, res) => {
  res.json({"msg": "Prueba de endpoint en chat"})
})

// Intenta completar con el primer modelo disponible (permite fallback si uno está deprecado)
async function completeWithFirstAvailable(prompt, apiKey) {
  const candidates = [
    process.env.GROQ_MODEL, // Permite configurar manualmente el modelo recomendado desde .env
    "llama-3.3-70b-versatile",
    "llama-3.1-8b-instant",
    "llama3-70b-8192",
  ].filter(Boolean);

  let lastError;
  for (const model of candidates) {
    try {
      const response = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          model,
          messages: [
            { role: "system", content: "you are an expert in microlearning. Answer clearly and concisely." },
            { role: "user", content: prompt },
          ],
          temperature: 0.7,
          max_tokens: 500,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      return { response, model };
    } catch (err) {
      const code = err.response?.data?.error?.code;
      const status = err.response?.status;
      // Si el modelo está deprecado o no existe, intenta con el siguiente
      if (code === "model_decommissioned" || status === 404) {
        lastError = err;
        continue;
      }
      // Para otros errores, propaga inmediatamente
      throw err;
    }
  }
  // Si ninguno funcionó, devuelve el último error capturado
  throw lastError || new Error("No available model from candidates");
}

router.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  // Validaciones básicas
  if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
    return res.status(400).json({ error: "Prompt is required" });
  }
  if (!process.env.GROQ_API_KEY) {
    console.error("GROQ_API_KEY is not set in environment variables");
    return res.status(500).json({ error: "Server misconfiguration: GROQ_API_KEY missing" });
  }

  try {
    const { response, model } = await completeWithFirstAvailable(prompt, process.env.GROQ_API_KEY);
    res.json({ reply: response.data.choices[0].message.content, model });
  } catch (error) {
    const status = error.response?.status || 500;
    const details = error.response?.data || { message: error.message };
    console.error("Error in Groq:", details);
    res.status(status).json({ error: "Groq API error", details });
  }
});

module.exports = router;
