<script>
  export let name 
  export let age
  export let jobTitle
  export let description
  export let imageURL
</script>

<div class="card">
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
    <p>{description}</p>
  </div>
</div>

<style>
  .card {
    border: 1px solid black;
  }
</style>