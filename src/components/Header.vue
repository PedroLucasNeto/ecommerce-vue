<template>
  <nav class="flex justify-between w-full p-4 items-center">
    <div>LOGO</div>

    <ul class="flex justify-between space-x-4 items-center">
      <RouterLink to="/" class="hover:text-secondary" active-class="text-primary">
        <fa :icon="'fa-solid fa-home'"></fa>
      </RouterLink>
      <RouterLink to="/management" v-if="isAdmin" class="cursor-pointer hover:text-secondary"
        active-class="text-primary">
        <fa icon="fa-solid fa-gear" />
      </RouterLink>
      <ToggleTheme />
      <ToggleCart />
      <RouterLink to="/">Sair</RouterLink>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import ToggleTheme from '@/components/ToggleTheme.vue';
import ToggleCart from './ToggleCart.vue';

const isAdmin = computed(() => true);

</script>

<style scoped></style>