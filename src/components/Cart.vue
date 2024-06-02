<template>
  <div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" v-model="cartStore.isCartOpen" />
    <div class="drawer-content">
      <!-- Page content here -->
      <label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <div class="flex justify-between">
          <h1 class="font-bold">Meu Carrinho</h1>
          <ToggleCart />
        </div>
        <li v-for="item in cartStore.cart" :key="item.id" class="menu-item">
          <div class="flex justify-between items-center">
            <div>
              <h3>{{ item.name }}</h3>
              <p>{{ item.price }}</p>
            </div>
            <button @click="cartStore.removeFromCart(item.id)">
              <fa icon="fa-solid fa-trash" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>

import { useCartStore } from '@/stores/cartStore';
import ToggleCart from './ToggleCart.vue';

const cartStore = useCartStore();
</script>

<style scoped></style>