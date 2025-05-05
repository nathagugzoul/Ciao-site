const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur l’API de l’Intelligence Collective !');
});

app.listen(port, () => {
  console.log(`Serveur en ligne sur le port ${port}`);
});
