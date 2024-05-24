<template>
  <section id="management-section" class="p-4 w-full">
    <nav class="flex justify-between w-full">
      <div>
        <h1 class="">Bem vindo <span class="font-bold">{Username}</span></h1>
        <h2>Mensagem...</h2>
      </div>
      <Dropdown v-model="adminNavItems"></Dropdown>
    </nav>
  </section>
</template>

<script setup>
import Dropdown from '@/components/dropdown/Dropdown.vue'
const adminNavItems = [
  { name: 'Produtos', path: '/management/products' },
  { name: 'Carrinho', path: '/management/cart' },
  { name: 'Usuarios', path: '/management/users' },
  { name: 'Pedidos', path: '/management/orders' }
]
</script>

<style scoped></style>
