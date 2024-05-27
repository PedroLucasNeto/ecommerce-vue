<template>
  <button :class="classes" @click="method">
    <slot name="content">
      Click me
    </slot>
  </button>
</template>

<script setup lang='ts'>
import { inject } from 'vue';

const classes = defineModel('classes', {
  type: String,
  default: 'btn btn-primary text-white'
})

const method = inject<() => void>('method');
</script>

<style scoped></style>