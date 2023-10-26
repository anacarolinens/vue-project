<script setup> 

defineProps({ //somente de leitura
        pessoa: {
            type: Object,
            requered: true,
            default: () => ({
                id: 0,
                first_name: "",
                last_name: "",
                avatar: "",
                email: "",
            }),
        },
        selecao: Boolean,
    });

const emit = defineEmits(['selecao']);

const enviaEmit = (id) => {
    emit("selecao", id);
}

</script>

<template>

    <div class="perfil">
        <img :src="pessoa.avatar" alt="Perfil"/>
        <strong>{{ pessoa.first_name}}</strong>
        <span>{{ pessoa.email }}</span>
        <button class="botao" @click="$event => enviaEmit(pessoa.id)">{{ !selecao ? 'Selecionar': 'Desmarcar' }}</button>
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