<template>
  <div class="hero min-h-92 bg-base-200">
    <div class="hero-content flex-col">
      <img
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
        class="max-w-sm rounded-lg shadow-2xl"
      />
      <div>
        <h1 class="text-5xl font-bold">E-commerce Vue!</h1>
        <p class="py-6">
          Bem vindo(a) ao nosso E-commerce. Aqui utilizamos <strong>Vue 3, </strong>
          <strong>DaisyUi e </strong> <strong>FontAwesome </strong> para criar uma interface simples
          e amigável para você!
        </p>
        <button class="btn btn-primary">Conheça</button>
      </div>
    </div>
  </div>
  <section class="product-section" v-if="products.length">
    <h2 class="text-3xl font-bold mt-10">Produtos em alta</h2>
    <!-- Add your product cards here -->
    <div class="flex flex-wrap gap-4 items-center justify-center mt-6 py-4">
      <Product v-for="product in products" :key="product.id" :product="product" />
    </div>
  </section>
  <section>
    <CtaImageCard />
  </section>
</template>

<script setup>
import CtaImageCard from '@/components/CtaImageCard.vue'
import Product from '@/components/Product.vue'
import { onMounted, ref } from 'vue'
import productsService from '@/api/productsService.js'
const products = ref([])

async function getProducts() {
  const response = await productsService.getAllProducts()
  products.value = response
}

onMounted(() => {
  getProducts()
})
</script>

<style scoped></style>
