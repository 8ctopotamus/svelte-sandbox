<script>
  export let name 
  export let age
</script>

<div class="card">
  <header>
    <div>
      <img src="" alt="" />
    </div>
    <div>
      <h1>{name} - {age}</h1>
      <h2>Job Title</h2>
    </div>
  </header>
  <div>
    <p>A short description</p>
  </div>
</div>

<style>
  .card {
    border: 1px solid black;
  }
</style>