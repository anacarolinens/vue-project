<script setup>
 import { onMounted, provide, ref } from 'vue';
 import Aviso from '../components/Aviso.vue';

 const titulo = ref(null);
 const avisoRef = ref(null);

 onMounted(() => {
    console.log(titulo.value);
    titulo.value.style.color = "blue";
    console.log(avisoRef.value.aviso);
 });

 const mostraMenssagem = () => {
    avisoRef.value.chamaAlert();
 };

 provide("aviso", "Página inválida");
</script>

<template>
    <div>
       <h1 ref="titulo">Página não encontrada!</h1>
       <Aviso ref="avisoRef"/>
       <button @click="mostraMenssagem()">Chama Alert</button>
    </div>
</template>



<style lang="scss" scoped>

</style>