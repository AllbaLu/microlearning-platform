

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const chatRoutes = require('./routes/chat');
const topicsRoutes = require('./routes/topics');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', chatRoutes);
app.use('/api', topicsRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Active server at http://localhost:${PORT}`);   
})
