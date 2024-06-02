import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', () => {
  const isCartOpen = ref(false)

  function toggleCart (){
    isCartOpen.value = !isCartOpen.value
  } 

  return { isCartOpen, toggleCart}
})
