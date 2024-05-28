<template>
  <nav class="flex justify-between w-full p-4 bg-lightblue items-center">
    <div>LOGO</div>

    <ul class="flex justify-between space-x-4 items-center">
      <RouterLink to="/home">Início</RouterLink>
      <RouterLink to="/cart">Carrinho</RouterLink>
      <RouterLink to="/management" v-if="isAdmin">Gerenciamento</RouterLink>
      <RouterLink to="/">Sair</RouterLink>
      <input type="checkbox" data-set-theme="light,dark" class="toggle toggle-primary" checked />
      <!-- <RouterLink to="/home">Login</RouterLink> -->
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue';


const isAdmin = computed(() => true);
</script>

<style scoped></style>