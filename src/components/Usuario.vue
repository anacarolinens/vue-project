<script setup> 
import { computed } from 'vue';

    const props = defineProps({ //somente de leitura
        first_name: String,
        last_name: String,
        
    });


    const nomeCompleto = computed(() => `${props.first_name} ${props.last_name}`);

</script>

<template>

    <div class="perfil">
        <strong>{{ nomeCompleto }}</strong>

    </div> 
</template>

<style scoped>
.formulario {
    margin: 0 auto;
    padding: 5px;
    width: 200px;
    background-color: darkcyan;
}
.botao {
    margin: 5px auto;
    padding: 5px;
    display: block;
    background: darkcyan;
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
}

button:disabled, button[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: default;
}

.perfil {
    width: 150px;
    text-align: center;
}

.perfil img {
    margin: 0 auto;
    width: 80px;
    display: block;
    padding: 5px;
    border-radius: 10px;
}
.perfil span {
    display: block;
    font-size: 0.75rem;
}

</style>