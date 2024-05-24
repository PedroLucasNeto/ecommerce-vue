<template>
  <details class="dropdown">
    <summary class="m-1 btn">
      <slot name="title">
        Gerenciar
      </slot>
    </summary>
    <ul class="p-2 shadow menu dropdown-content z-[1] bg-lightblue rounded-box w-fit">
      <slot name="options">
        <li v-for="item in items" :key="item.name">
          <RouterLink :to="item.path">
            {{ item.name }}
          </RouterLink>
        </li>
      </slot>
    </ul>
  </details>
</template>

<script setup>
const items = defineModel({
  type: Array,
  default: () => []
})
</script>

<style scoped></style>
