
const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/topics/:lang', (req, res) => {
    const lang = req. params.lang;

    try {
        const filePath = require(path.join(__dirname, `../../locales/${lang}/topics.json`));
        console.log('Buscando en:', filePath);
        const topics = require(filePath);
        res.json(topics);
    } catch (error) {
        res.status(404).json({error: "Language not found"});
        console.log(error, "error language");
        
    }
});

module.exports = router;