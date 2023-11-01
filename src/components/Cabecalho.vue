<script setup>
import { useLogin } from '../store/login';
import { storeToRefs } from 'pinia';

const store = useLogin();
const { usuarioLogado, logado } = storeToRefs(store);

const mensagem = "Apendendo slot";

const mostraNome = () => {
    alert("Apresendendo slot");
}

</script>

<template>
    <div>
        <h1 class="title" v-if="logado">Bem vindo (a) {{ usuarioLogado }}</h1>
        <slot :mesagem="mensagem" :funcao="mostraNome"></slot>
    </div> 
</template>

<style scoped>
.title {
    max-width: 0 auto;
    text-align: center;
    color: red;
}

.subtitle {
    max-width: 0 auto;
    text-align: center;
}
</style>