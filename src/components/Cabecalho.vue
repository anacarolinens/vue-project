<script setup>
import { useLogin } from '../store/login';
import { storeToRefs } from 'pinia';

const store = useLogin();
const { usuarioLogado, logado } = storeToRefs(store);

</script>

<template>
    <div>
        <h1 class="title" v-if="logado">Bem vindo (a) {{ usuarioLogado }}</h1>
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