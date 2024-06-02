<template>
    <fa :icon="'fa-solid fa-cart-shopping'" @click="toggleCart" class="cursor-pointer hover:text-secondary"></fa>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore';

const toggleCart = useCartStore().toggleCart;
</script>
<style></style>