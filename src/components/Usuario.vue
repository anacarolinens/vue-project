<script setup> 
import { ref, onMounted, computed, watch, watchEffect} from 'vue';

    const pessoa = ref({});
    const codigoUsuario =  ref(0);
    
    
    onMounted( async () => {
        pessoa.value = await buscaInformacoes(1);
    });

    const habilitaButao = computed(() => codigoUsuario.value > 0);

    const nomeCompleto = computed(() => `${pessoa.value.first_name} ${pessoa.value.last_name})`);

    const pesquisaInformacoes = async () => {
        pessoa.value = await buscaInformacoes(codigoUsuario.value);
    };


    const buscaInformacoes = async (codigo) => {
        const req = await fetch(`https://reqres.in/api/users/${codigo}`);
        const json = await req.json();
        return json.data;
    };

    //usado para observar mudanças em proriedades específicas (propriedades que podem mudar)
    //watch(codigoUsuario, (novo, antigo) => {
    //    if(novo <= 0) {
    //        codigoUsuario.value = 0;
    //    }
    //});

    //função que recebe uma função de retorno de chamada como argumento, sendo executada imediatamente
    //pode ser async
    //conjunto de propriedades que podem mudar em conjunto
    //watchEffect(async() => {
    //    pessoa.value = await buscaInformacoes(codigoUsuario.value) || 1;
    //})

</script>

<template>
    <form class="formulario">
        <label for="codigoUsuario">Código do usuário</label><br/>
        <input type="text" id="codigoUsuario" name="codigoUsuario" v-model="codigoUsuario"><br/>
    </form>

    <button v-bind:disabled="!habilitaButao" v-on:click="pesquisaInformacoes" class="botao">Buscar</button>

    <div class="perfil">
        <img v-bind:src="pessoa.avatar" alt="Perfil">
        <strong>{{ nomeCompleto }}</strong>
        <span>{{ pessoa.email }}</span>
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