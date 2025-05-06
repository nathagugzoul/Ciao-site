const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route pour l’Intelligence Collective
app.post('/api/ask', async (req, res) => {
  const question = req.body.question;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [{ role: 'user', content: question }]
      })
    });

    const data = await response.json();
    const answer = data.choices[0]?.message?.content || "Réponse indisponible.";
    res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de la communication avec OpenAI.' });
  }
});

app.listen(port, () => {
  console.log(`Serveur en ligne sur le port ${port}`);
});
