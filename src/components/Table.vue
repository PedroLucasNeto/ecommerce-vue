<template>
  <div class="overflow-x-auto">
    <table class="table">
      <slot name="tableHead">
        <thead>
          <tr>
            <th v-for="(item, index) in tableFields" :key="index">
              {{ item }}
            </th>
          </tr>
        </thead>
      </slot>
      <slot name="tableBody">
        <tbody>
          <tr class="bg-base-200" v-for="(item, index) in tableData" :key="index">
            <td v-for="(value, key) in item" :key="key">
              {{ value }}
            </td>
          </tr>
        </tbody>
      </slot>
    </table>
  </div>
</template>

<script setup lang='ts'>
import { defineModel } from 'vue'

const tableData = defineModel('tableData', {
  type: Array,
  required: true
})
const tableFields = defineModel('tableFields', {
  type: Array,
  required: true
})
</script>

<style scoped></style>