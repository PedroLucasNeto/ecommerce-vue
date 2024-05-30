<template>
    <div>
        <Table :tableData="data" :tableFields="fields">
        </Table>
    </div>
</template>

<script setup>
import Table from '@/components/Table.vue';
const data = [
    { id: 1, name: 'Produto 1', qty: '1', owner: 'John Doe' },
    { id: 2, name: 'Produto 2', qty: '5', owner: 'John Doe' },
    { id: 3, name: 'Produto 3', qty: '2', owner: 'John Doe' },
    { id: 4, name: 'Produto 4', qty: '3', owner: 'John Doe' },
    { id: 5, name: 'Produto 5', qty: '1', owner: 'John Doe' },
];

const fields = ['Produto', 'Qtd Vendida', 'Vendedor'];
</script>

<style scoped></style>