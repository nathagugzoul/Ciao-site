
<script>
  async function askQuestion() {
    const question = document.getElementById('question').value;
    const responseDiv = document.getElementById('response');
    responseDiv.textContent = 'Chargement...';

    try {
      const response = await fetch('https://ciau-backend.replit.app/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question })
      });

      const data = await response.json();
      responseDiv.textContent = data.response;
    } catch (error) {
      responseDiv.textContent = 'Erreur lors de la récupération de la réponse.';
      console.error(error);
    }
  }
</script>
