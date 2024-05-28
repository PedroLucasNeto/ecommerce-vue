<template>
  <div>
    <nav class="flex justify-between p-4">
      <div>
        <h1 class="">Bem vindo <span class="font-bold">{Username}</span></h1>
        <h2>Mensagem...</h2>
      </div>
      <Dropdown v-model="adminNavItems" v-model:method="adicionarItem"></Dropdown>
    </nav>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import Dropdown from '@/components/Dropdown.vue';
import { provide, ref } from 'vue';

function adicionarItem() {
  adminNavItems.value.push({ name: 'Novo item', path: '/management/new' });
}

provide('method', anotheAlert);

const adminNavItems = ref([
  { name: 'Produtos', path: '/management/products' },
  { name: 'Usuarios', path: '/management/users' },
  { name: 'Pedidos', path: '/management/orders' }
])

function anotheAlert() {
  adminNavItems.value.push({ name: 'Novo item', path: '/management/new' });
}
</script>

<style scoped></style>
