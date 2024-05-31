<template>
  <div class="hero min-h-92 bg-base-200">
    <div class="hero-content flex-col ">
      <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
        class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 class="text-5xl font-bold">E-commerce Vue!</h1>
        <p class="py-6">Bem vindo(a) ao nosso E-commerce. Aqui utilizamos <strong>Vue 3, </strong>
          <strong>DaisyUi e </strong> <strong>FontAwesome </strong> para criar uma interface simples e amigável para
          você!
        </p>
        <button class="btn btn-primary">Conheça</button>
      </div>
    </div>

  </div>
  <section class="product-section">
    <h2 class="text-3xl font-bold mt-10">Produtos em Destaque</h2>
    <!-- Add your product cards here -->
    <div class="flex flex-wrap gap-4 items-center justify-center mt-6 overflow-y-scroll max-h-full">
      <Product v-for="product in products" :key="product.id" :image="product.image" :name="product.name"
        :description="product.description" />
    </div>
  </section>
</template>

<script setup>
import Product from "@/components/Product.vue";
const products = [
  {
    id: 1,
    image: "https://example.com/product2.jpg",
    name: "Product 1",
    description: "Description of Product 1",
  },
  {
    id: 2,
    image: "https://example.com/product3.jpg",
    name: "Product 2",
    description: "Description of Product 2",
  },
  {
    id: 3,
    image: "https://example.com/product4.jpg",
    name: "Product 3",
    description: "Description of Product 3",
  },
  {
    id: 4,
    image: "https://example.com/product5.jpg",
    name: "Product 4",
    description: "Description of Product 4",
  },
  {
    id: 5,
    image: "https://example.com/product5.jpg",
    name: "Product 5",
    description: "Description of Product 5",
  },
  {
    id: 6,
    image: "https://example.com/product6.jpg",
    name: "Product 6",
    description: "Description of Product 6",
  },
  {
    id: 7,
    image: "https://example.com/product7.jpg",
    name: "Product 7",
    description: "Description of Product 7",
  },
  {
    id: 8,
    image: "https://example.com/product8.jpg",
    name: "Product 8",
    description: "Description of Product 8",
  },
  {
    id: 9,
    image: "https://example.com/product9.jpg",
    name: "Product 9",
    description: "Description of Product 9",
  },
  {
    id: 10,
    image: "https://example.com/product10.jpg",
    name: "Product 10",
    description: "Description of Product 10",
  }

]

</script>

<style scoped></style>