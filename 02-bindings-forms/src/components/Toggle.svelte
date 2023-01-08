<script>
  export let chosenOption = 1
</script>

<button
  on:click={() => chosenOption = 1}
  disabled={chosenOption === 1}
>Option 1</button>
<button 
  on:click={() => chosenOption = 2}
  disabled={chosenOption === 2}
>Option 2</button>