<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure class="h-64"><img class="h-64" :src="product.image" :alt="product.name" /></figure>
    <div class="card-body">
      <h2 class="card-title">{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <div class="card-actions justify-between items-center">
        <span>{{ product.price }} <span>R$</span> </span>
        <slot name="button">
          <button class="btn btn-primary">Comprar Agora</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const product = defineModel('product', {
  type: Object,
  required: true
})


</script>

<style scoped></style>