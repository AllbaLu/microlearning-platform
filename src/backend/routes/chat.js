

const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

require('dotenv').config();

const router = express.Router();


router.post('/api/chat', async (req, res) => {
    const { prompt } = req.body;


    try {
        const response = await axios.post(
            'https://api.groq.com/openai/v1/chat/completions',
        {
          model: 'llama3-70b-8192',
          messages: [
            { role: 'system', content: 'you are an expert in microlearning.'},
            { role: 'user', content: prompt},
          ],
          temperature:0.7,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
            },
        }
    );

    res,express.json(response.data);
    } catch (error) {
        console.log('Error in Groq:', error,message);
        res.status(500).json({error:'Error response Groq'}); 
    }
});

module.exports = router;