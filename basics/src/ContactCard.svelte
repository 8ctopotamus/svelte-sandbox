<script>
  export let name 
  export let age
  export let jobTitle
  export let description
  export let imageURL

  let userInput = ''; // fake XSS attack example
  // Enter this img tag as the Description input value:
  // <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="alert('You were hacked!');">

</script>

<div class="card">

  <!-- fake XSS attack example -->
  <input type="text" bind:value={userInput} /> 

  <header>
    <div>
      <img src={imageURL} alt={name} />
    </div>
    <div>
      <h1>{name} - {age}</h1>
      <h2>{jobTitle}</h2>
    </div>
  </header>
  <div>
    <p>{@html description}</p>
  </div>
</div>

<style>
  .card {
    border: 1px solid black;
  }
</style>