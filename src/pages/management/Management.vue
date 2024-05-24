<template>
  <div>

    <nav class="flex justify-between p-4">
      <div>
        <h1 class="">Bem vindo <span class="font-bold">{Username}</span></h1>
        <h2>Mensagem...</h2>
      </div>
      <Dropdown v-model="adminNavItems"></Dropdown>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
import Dropdown from '@/components/dropdown/Dropdown.vue'
const adminNavItems = [
  { name: 'Produtos', path: '/management/products' },
  { name: 'Usuarios', path: '/management/users' },
  { name: 'Pedidos', path: '/management/orders' }
]
</script>

<style scoped></style>
