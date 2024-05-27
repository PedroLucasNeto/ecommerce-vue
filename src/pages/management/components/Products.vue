<template>
    <div>
        <Table :tableData="data" :tableFields="fields">
        </Table>
    </div>
</template>

<script setup lang="ts">
import Table from '@/components/Table.vue';
const data = [
    { name: 'Product 1', price: 100.0, actions: '' },
    { name: 'Product 2', price: 200.0, actions: '' },
    { name: 'Product 3', price: 300.0, actions: '' },
    { name: 'Product 4', price: 400.0, actions: '' },
    { name: 'Product 5', price: 500.0, actions: '' },
];

const fields = ['Nome', 'Preço', 'Actions'];
</script>

<style scoped></style>