<template>
  <div>
    <nav class="flex justify-between p-4">
      <div>
        <h1 class="">Bem vindo <span class="font-bold">{Username}</span></h1>
        <h2>Mensagem...</h2>
      </div>
      <Dropdown v-model="adminNavItems" v-model:method="adicionarItem"></Dropdown>
    </nav>
    <Button :classes="'btn btn-primary text-white'"></Button>
    <Searchbar></Searchbar>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import Searchbar from '@/components/Searchbar.vue';
import Dropdown from '@/components/Dropdown.vue';
import Button from '@/components/Button.vue';
import { provide, ref } from 'vue';

function adicionarItem () {
  adminNavItems.value.push({ name: 'Novo item', path: '/management/new' });
}

provide('method', alert);
const adminNavItems = ref([
  { name: 'Produtos', path: '/management/products' },
  { name: 'Usuarios', path: '/management/users' },
  { name: 'Pedidos', path: '/management/orders' }
])
</script>

<style scoped></style>
