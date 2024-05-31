<template>
    <div class="bg-white rounded-lg shadow-md p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
        <img :src="image" :alt="name" class="sm:w-full h-40 object-cover rounded-md">
        <h3 class="text-lg font-semibold mt-2">{{ name }}</h3>
        <p class="text-gray-500 mt-1">{{ description }}</p>
        <button class="btn btn-primary mt-4">Adicionar ao Carrinho</button>
    </div>
</template>

<script setup>
import { defineModel } from 'vue';

const image = defineModel('image', {
    type: String,
    required: true
});

const name = defineModel('name', {
    type: String,
    required: true
});

const description = defineModel('description', {
    type: String,
    required: true
});
</script>

<style scoped>
@media (max-width: 640px) {
    .sm\:w-full {
        width: 100%;
    }
}
</style>