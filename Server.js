const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Dossier public contenant les fichiers HTML, CSS, JS…
app.use(express.static(__dirname));

// Route par défaut (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Serveur en ligne sur le port ${port}`);
});
