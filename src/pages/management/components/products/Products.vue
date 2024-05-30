<template>
    <div class="flex flex-col items-center gap-4">
        <Table v-show="!isOpen" :editItem="editItem" :retrieveItem="retrieveItem" :deleteItem="deleteItem"
            :tableData="data" :tableFields="fields" :classes="'w-64 striped bg-white'">
        </Table>
        <div class="pt-4 flex flex gap-4" v-show="isOpen">
            <div class="flex flex-col gap-2">
                <h1 class="font-bold">Dados do Produto</h1>
                <ProductsForm :isOpen="isOpen" :product="product" />
            </div>
            <div class="flex flex-col gap-2">
                <h1 class="font-bold">Pré visualização</h1>
                <Card :product="product" />
            </div>
        </div>
        <Button :classes="'w-fit btn-primary text-white'"
            :method="method">{{ isOpen ? 'Cancelar' : 'Adicionar' }}</Button>
    </div>
</template>

<script setup>
import Button from '@/components/Button.vue';
import Table from '@/components/Table.vue';
import { provide, ref, watch, nextTick } from 'vue';
import ProductsForm from './ProductsForm.vue';
import Card from '@/components/Card.vue';

const product = ref({})

const method = provide('method', toggleForm);

function editItem (item) {
    product.value = item;
    toggleForm();
    console.log(item)
}
function deleteItem (item) {
    console.log(item)
}
function retrieveItem (item) {
    console.log(item)
}

const data = [
    {
        id: 1, name: 'Product 1', price: 100.0
    },
    { id: 2, name: 'Product 2', price: 200.0 },
    { id: 3, name: 'Product 3', price: 300.0 },
    { id: 4, name: 'Product 4', price: 400.0 },
    { id: 5, name: 'Product 5', price: 500.0 },
];

const fields = ['Nome', 'Preço'];

const isOpen = ref(false);
const formProduct = ref(null);

function toggleForm () {
    isOpen.value = !isOpen.value;
}

watch(isOpen, async (newValue) => {
    if (newValue) {
        await nextTick();
        if (formProduct.value) {
            formProduct.value.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        scrollTo(0, 0);
    }
});
</script>

<style scoped></style>