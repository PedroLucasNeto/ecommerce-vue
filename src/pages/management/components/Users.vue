<template>
    <div>
        <Table :tableData="data" :tableFields="fields">
        </Table>
    </div>
</template>

<script setup lang="ts">
import Table from '@/components/Table.vue';
const data = [
    { name: 'Usuário 1', perfil: 'Vendedor', actions: '' },
    { name: 'Usuário 2', perfil: 'Usuário', actions: '' },
    { name: 'Usuário 3', perfil: 'Vendedor', actions: '' },
    { name: 'Usuário 4', perfil: 'Usuário', actions: '' },
    { name: 'Usuário 5', perfil: 'Vendedor', actions: '' },
];

const fields = ['Nome', 'Perfil', 'Actions'];
</script>

<style scoped></style>