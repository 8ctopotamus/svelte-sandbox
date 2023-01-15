import { writable } from 'svelte/store'

function createCart () {
  const cart = writable([
    {
      id: "p3",
      title: "A Book",
      price: 9.99,
      description: "A great book!"
    },
    {
      id: "p4",
      title: "A Carpet",
      price: 99.99,
      description: "Red and green."
    }
  ])
  return {
    subscribe: cart.subscribe,
    addItem: item => {
      cart.update(items => [...items, item])
    },
    removeItem: id => {
      cart.update(items => {
        return items.filter(item => item.id !== id)
      })
    }
  }
}

export default createCart()