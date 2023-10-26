<script setup>
import { computed } from 'vue';
import { useFetch} from '../composables/fetch';

const { data } = useFetch(`https://reqres.in/api/users/3`);

const subtitulo = '<p style="color:silver">Tutorial Vue, .NET</p>';

const nome = computed(() => {
    if(!data.value) return "";
    return `${data.value.first_name} ${data.value.last_name}`;
});
</script>
<template>
    <div>
        <h1 class="title">{{ nome }}</h1>
        <span class="subtitle" v-html="subtitulo"></span>
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