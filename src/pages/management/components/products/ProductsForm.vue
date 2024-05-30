<template>
  <form ref="formProduct" class="flex flex-col shadow-xl space-y-4 p-4 shadow bg-darkblue rounded-lg w-fit">
    <div v-if="product.id">
      <label>Id</label>
      <input type="text" placeholder="Ex: Tênis Adidas" class="input input-bordered w-full max-w-xs"
        v-model="product.id" />
    </div>
    <label>Nome</label>
    <input type="text" placeholder="Ex: Tênis Adidas" class="input input-bordered w-full max-w-xs"
      v-model="product.name" />
    <label>Preço</label>
    <input type="number" placeholder="Ex: Tênis Adidas" class="input input-bordered w-full max-w-xs"
      v-model="product.price" />
    <label>Imagem</label>
    <input type="file" accept="image/*" class="file-input file-input-bordered w-full max-w-xs"
      @change="setProductImage" />
    <Button :classes="'btn-success w-fit text-white'" @click.prevent="() => { }">Salvar</Button>
  </form>
</template>

<script setup>
import Button from '@/components/Button.vue';

const product = defineModel('product', {
  type: Object
})

function setProductImage (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      product.value.image = event.target.result;
    };
    reader.readAsDataURL(file);
  }
}
</script>

<style scoped></style>
