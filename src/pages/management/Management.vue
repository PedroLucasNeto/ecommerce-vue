<template>
  <div>
    <nav class="flex justify-between p-4">
      <div>
        <h1 class="">Bem vindo <span class="font-bold">{Username}</span></h1>
        <h2>Mensagem...</h2>
      </div>
      <Dropdown v-model="dropdownList"></Dropdown>
    </nav>
    <div v-show="toggleStatusBar" class="flex flex-col justify-center items-center gap-4">
      <StatusBar />
      <CtaImageCard />
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import StatusBar from '@/components/StatusBar.vue';
import Dropdown from '@/components/Dropdown.vue';
import { computed, provide, ref } from 'vue';
import { useRoute } from 'vue-router';
import CtaImageCard from '@/components/CtaImageCard.vue';
const route = useRoute();

const toggleStatusBar = computed(() => {
  console.log(route.fullPath)
  return route.fullPath === '/management';
})
const defaultList = ref([
  { name: 'Produtos', path: '/management/products' },
  { name: 'Usuarios', path: '/management/users' },
  { name: 'Pedidos', path: '/management/orders' }
])
const dropdownList = computed(() => {
  let newList = [...defaultList.value];
  if (!toggleStatusBar.value) {
    newList.push({ name: 'Voltar', path: '/management' })
  }
  return newList;
})


</script>

<style scoped></style>
