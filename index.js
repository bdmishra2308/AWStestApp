// index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public')); // serve static files from 'public' folder

app.get('/', (req, res) => {
  res.send('Hello from Express frontend!');
});

app.listen(PORT, () => {
  console.log(`Frontend server running at http://localhost:${PORT}`);
});