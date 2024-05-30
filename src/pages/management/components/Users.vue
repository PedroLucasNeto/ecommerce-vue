<template>
    <div>
        <Table :tableData="data" :tableFields="fields">
        </Table>
    </div>
</template>

<script setup lang="ts">
import Table from '@/components/Table.vue';
const data = [
    { id: 1, name: 'Usuário 1', perfil: 'Vendedor', actions: '' },
    { id: 2, name: 'Usuário 2', perfil: 'Usuário', actions: '' },
    { id: 3, name: 'Usuário 3', perfil: 'Vendedor', actions: '' },
    { id: 4, name: 'Usuário 4', perfil: 'Usuário', actions: '' },
    { id: 5, name: 'Usuário 5', perfil: 'Vendedor', actions: '' },
];

const fields = ['Nome', 'Perfil', 'Actions'];
</script>

<style scoped></style>