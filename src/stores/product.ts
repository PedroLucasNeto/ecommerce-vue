import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface Product{
  name: string;
  description: string;
  price: number;
  image: string;
}

export const useProductStore = defineStore('productStore', () => {
  const product = ref({})
  function setProduct (newProduct:Product){
    product.value = newProduct
  }

  return { product, setProduct }
})
