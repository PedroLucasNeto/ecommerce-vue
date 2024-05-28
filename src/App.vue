<template>
  <Header />
  <Transition name="fade" mode="out-in">
    <div class="min-w-full max-w-full p-4">
      <RouterView />
    </div>
  </Transition>
</template>
<script setup lang="ts">
import Header from './components/Header.vue'

</script>

<style></style>
