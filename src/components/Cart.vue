<template>
  <div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" v-model="cartStore.isCartOpen" />
    <div class="drawer-content">
      <!-- Page content here -->
      <label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label>
    </div>
    <div class="drawer-side ">
      <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content relative">
        <div class="flex justify-between">
          <h1 class="font-bold">Meu Carrinho</h1>
          <ToggleCart />
        </div>
        <h3 v-if="!cartStore.cartItems.length">Seu carrinho está vazio</h3>
        <button v-else class="btn btn-error absolute bottom-5 text-white">Limpar Carrinho</button>
        <li v-for="item in cartStore.cartItems" :key="item.id" class="">
          <div class="flex justify-between items-center">
            <div>
              <h3>{{ item.product.name }}</h3>
              <p>Preço: {{ item.product.price.toFixed(2) }}</p>
              <p>Quantidade: {{ item.quantity }}</p>
            </div>
            <div class="flex gap-4">
              <button @click="cartStore.addQuantityToItem(item.product.id)" class="text-success">
                <fa icon="fa-solid fa-plus" />
              </button>
              <button @click="cartStore.removeFromCart(item.product.id)" class="text-error">
                <fa icon="fa-solid fa-trash" />
              </button>
            </div>
          </div>
        </li>
        <h1 class="font-bold">Total: R$ {{ cartStore.totalValue.toFixed(2) }}</h1>
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