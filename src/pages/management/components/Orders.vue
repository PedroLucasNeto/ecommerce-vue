<template>
    <div>
        <Table :tableData="data" :tableFields="fields">
        </Table>
    </div>
</template>

<script setup>
import Table from '@/components/Table.vue';
const data = [
    { name: 'Produto 1', qty: '1', owner: 'John Doe' },
    { name: 'Produto 2', qty: '5', owner: 'John Doe' },
    { name: 'Produto 3', qty: '2', owner: 'John Doe' },
    { name: 'Produto 4', qty: '3', owner: 'John Doe' },
    { name: 'Produto 5', qty: '1', owner: 'John Doe' },
];

const fields = ['Produto', 'Quantidade Vendida', 'Vendedor'];
</script>

<style scoped></style>