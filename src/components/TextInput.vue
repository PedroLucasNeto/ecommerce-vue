<template>
  <input type="text" :placeholder="placeholder" class="input input-bordered w-full max-w-xs" />
</template>

<script setup>
const placeholder = defineModel({
  type: String,
  default: 'Type here'
})
</script>

<style scoped></style>
