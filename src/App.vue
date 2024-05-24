<script setup lang="ts">
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <Transition name="fade" mode="out-in">
    <div class="container min-w-full max-w-full">
      <RouterView />
    </div>
  </Transition>
</template>

<style></style>
