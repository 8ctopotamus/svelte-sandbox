import { readable } from 'svelte/store'

let count = 0

const timer = readable(0, set => {
  const intervalId = setInterval(() => {
    count++
    set(count)
  }, 1000)
  
  return () => clearInterval(intervalId)
})

export default timer