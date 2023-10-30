<script setup>
import Usuario from '../components/Usuario.vue';
import { useFetch} from '../composables/fetch';
import { useRoute } from 'vue-router';

const router = useRoute();

const id = router.params.id;

const { data: pessoa, carregando } = useFetch(`https://reqres.in/api/users/${id}`);

</script>

<template>
    <div>
        <div v-if="carregando"> Carregando...</div>
        <Usuario :pessoa="pessoa" v-else></Usuario>
    </div>
</template>


<style lang="scss" scoped>

</style>