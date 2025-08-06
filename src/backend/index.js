

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const chatRoutes = require('./routes/chat');

const app = express();

app.use(cors());
app.use(express.json());

app.use(chatRoutes);


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);   
})
