<script setup> 
import { ref, onMounted, watchEffect} from 'vue';
import Usuario from './Usuario.vue';
import { provide } from 'vue';

    const pessoas = ref([]);
    const idSelecao = ref([]);
    const pessoasSelecionadas = ref([]);
    const aviso = "Em caso de dúvidas contacte o suporte"

    const buscaInformacoes = async () => {
        const req = await fetch(`https://reqres.in/api/users?page=2`);
        const json = await req.json();
        return json.data;
    };

    onMounted( async () => {
        pessoas.value = await buscaInformacoes();
    });

    const adicionaSelecao = (evento) => {
        if (idSelecionado(evento)){
            idSelecao.value = idSelecao.value.filter((x) => x !== evento);
            return
        }
        idSelecao.value.push(evento);
    }

    watchEffect(() => {
        pessoasSelecionadas.value = pessoas.value.filter((x) => idSelecionado(x.id))
    });

    const idSelecionado = (id) => {
        return idSelecao.value.includes(id);
    }

    provide("aviso", aviso);


</script>

<template>
    <div class="selecionados">
        <span v-for="pm in pessoasSelecionadas" :key="pm.id" class="card">{{ pm.first_name}}</span>
    </div>
    <div class="pessoas">
        <Usuario v-for="pessoa in pessoas" :key="pessoa.id" :pessoa="pessoa" :selecao="idSelecionado(pessoa.id)" @selecao="adicionaSelecao"></Usuario>
    </div>
    
</template>

<style scoped>
.selecionados {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}

.selecionados > span {
    background-color: #6fd6d6;
    padding: 5px;
    font-size: 0.785rem;
    border-radius: 5px;

}
.pessoas {
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
}
.perfil {
    width: 150px;
    text-align: center;
    margin-bottom: 45px;
}

.perfil h3 {
    margin-bottom: 8px;
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