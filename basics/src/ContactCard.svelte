<script>
  export let name 
  export let age
  export let jobTitle
  export let description
  export let imageURL
</script>

<div class="card">
  <header>
    <div class="thumbnail" class:has-src={imageURL}>
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
  .thumbnail {
    background: #ccc;
    min-height: 150px;
  }
  .has-src {
    background: purple;
  }
</style>