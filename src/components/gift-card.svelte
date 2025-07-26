<script>
  function goBack() {
    history.back();
  }
</script>

<div class="container">
  <div class="icon">🎁</div>
  <h1>Gift Cards</h1>
  <p>This section is under construction. Please check back soon!</p>
  <button on:click={goBack}>Go back</button>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;

    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  .icon {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #1e293b;
  }

  p {
    font-size: 1rem;
    color: #475569;
    margin-bottom: 2rem;
  }

  button {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  button:hover {
    background-color: #2563eb;
  }
</style>
