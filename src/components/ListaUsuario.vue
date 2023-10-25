<script setup> 
import { ref, onMounted} from 'vue';

    const pessoas = ref([]);
    
    const buscaInformacoes = async () => {
        const req = await fetch(`https://reqres.in/api/users?page=2`);
        const json = await req.json();
        return json.data;
    };

    onMounted( async () => {
        pessoas.value = await buscaInformacoes();
    });

    //Diretiva personalizada local
    /*const vEmail = {
        created(el, biding) {
            el.innerHTML = `<a href="${biding.value}">${biding.value}</a>`
        }
    };*/

</script>

<template>
    <div class="pessoas">
        <div class="perfil" v-for="pessoa in pessoas" :key="pessoa.id">
            <h3 style="color: red;" v-if="pessoa.first_name === 'George'">Gerente</h3>  
            <h3 style="color: purple;" v-else-if="pessoa.first_name === 'Rachel'">Supervisora</h3>
            <h3 style="color: green;" v-else>Operacional</h3>
            <img :src="pessoa.avatar" alt="Perfil">
            <strong>{{ pessoa.first_name}}</strong>
            <span style="font-size: 10px;" v-email=pessoa.email></span>
        </div> 
    </div>
    
</template>

<style scoped>
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