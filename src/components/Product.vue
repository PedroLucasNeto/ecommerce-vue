<template>
    <div class="bg-base-200 rounded-lg shadow-md p-4 min-w-80">
        <img :src="product.image" :alt="product.name" class="sm:w-full h-40 object-cover rounded-md">
        <h3 class="text-lg font-semibold mt-2">{{ product.name }}</h3>
        <p class="text-gray-500 mt-1">{{ product.description }}</p>
        <p class="text-gray-500 mt-1">{{ product.price }}</p>
        <div class="flex justify-between items-center pt-4">
            <button class="btn btn-primary text-white">Comprar Agora</button>
            <fa @click="addToCart" :icon="'fa-solid fa-cart-plus'"
                class="text-primary hover:text-secondary cursor-pointer" />
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();


const { product } = defineProps({
    product: {
        type: Object,
    }
});

function addToCart() {
    if (!product.id) return;
    cartStore.addToCart(product);
}
</script>

<style scoped></style>