<template>
  <nav class="flex justify-between w-full p-4 bg-lightblue">
    <div>LOGO</div>

    <ul class="flex justify-between space-x-4 ">
      <RouterLink to="/home">Início</RouterLink>
      <RouterLink to="/cart">Carrinho</RouterLink>
      <RouterLink to="/management" v-if="isAdmin">Gerenciamento</RouterLink>
      <RouterLink to="/">Sair</RouterLink>
      <!-- <RouterLink to="/home">Login</RouterLink> -->
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue';


const isAdmin = computed(() => true);
</script>

<style scoped></style>