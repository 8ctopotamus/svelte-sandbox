<script>
  import Cart from "./Cart/Cart.svelte";
  import Products from "./Products/Products.svelte";
  import Button from './UI/Button.svelte'
  import timer from './timer-store'

  let showCart = false

  // timer.subscribe(count => console.log('App', count))
</script>

<p>Count: {$timer}</p>

<Button on:click={() => showCart = !showCart}>Toggle Cart</Button>

{#if showCart}
  <Cart />
{/if}

<Products />
