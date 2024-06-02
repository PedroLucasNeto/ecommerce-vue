import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

interface CartItem {
  product: Product;
  quantity: number;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const useCartStore = defineStore('cartStore', () => {
  const isCartOpen = ref(false)
  const cartItems = ref<CartItem[]>([])
  const totalValue = computed(() => {
    return cartItems.value.reduce((acc, cartItem) => {
      return acc + cartItem.product.price * cartItem.quantity
    }, 0)
  })

  function toggleCart() {
    isCartOpen.value = !isCartOpen.value
  }

  function addToCart(item: Product) {
    const existingItem = cartItems.value.find(cartItem => cartItem.product.id === item.id)

    if (existingItem) {
      existingItem.quantity++
    } else {
      cartItems.value.push({ product: item, quantity: 1 })
    }
  }
  function addQuantityToItem (id: number){
    const existingItem = cartItems.value.find(cartItem => cartItem.product.id === id)
    if (existingItem) {
      existingItem.quantity++
    }
  }

  function removeFromCart(id: number) {
    const existingItem = cartItems.value.find(cartItem => cartItem.product.id === id)

    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity--
      } else {
        const index = cartItems.value.indexOf(existingItem)
        cartItems.value.splice(index, 1)
      }
    }
  }

  function clearItems() {
    cartItems.value.splice(0)
  }

  return { isCartOpen,cartItems, totalValue, toggleCart , addToCart, removeFromCart,
     clearItems, addQuantityToItem, }
})
