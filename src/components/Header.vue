<template>
  <nav class="flex justify-between w-full p-4 bg-lightblue items-center">
    <div>LOGO</div>

    <ul class="flex justify-between space-x-4 items-center">
      <RouterLink to="/home">Início</RouterLink>
      <RouterLink to="/cart" v-if="!isAdmin">Carrinho</RouterLink>
      <RouterLink to="/management" v-if="isAdmin">Gerenciamento</RouterLink>
      <RouterLink to="/">Sair</RouterLink>
      <fa :icon="theme === 'dark' ? 'moon' : 'sun'" />
      <input type="checkbox" data-toggle-theme="light,dark" class="toggle toggle-primary" checked
        @change="toggleTheme" />
    </ul>
  </nav>
</template>

<script setup>
import { computed, onMounted } from 'vue';

const isAdmin = computed(() => true);

function toggleTheme() {
  const toggle = document.querySelector('[data-toggle-theme]');
  toggle.addEventListener('change', () => {
    const theme = toggle.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  });
}

onMounted(() => {
  toggleTheme();
});
</script>

<style scoped></style>