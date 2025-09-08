const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

router.get('/topics/:lang', (req, res) => {
  // Normaliza valores como en-US a en
  const lang = (req.params.lang || 'en').split('-')[0].toLowerCase();

  try {
    const filePath = path.join(__dirname, `../../locales/${lang}/topics.json`);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Language not found' });
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const topics = JSON.parse(fileContent);
    return res.json(topics);
  } catch (error) {
    console.error('Error loading topics:', error);
    return res.status(500).json({ error: 'Failed to load topics' });
  }
});

module.exports = router;
