<script setup> 
import { ref, onMounted} from 'vue';
import Usuario from './Usuario.vue';

    const pessoas = ref([]);
    
    const buscaInformacoes = async () => {
        const req = await fetch(`https://reqres.in/api/users?page=2`);
        const json = await req.json();
        return json.data;
    };

    onMounted( async () => {
        pessoas.value = await buscaInformacoes();
    });

</script>

<template>
    <div class="pessoas">
        <Usuario first_name="Ana" last_name="Silva"></Usuario>
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