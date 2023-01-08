import { writable } from 'svelte/store'

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

export default cart