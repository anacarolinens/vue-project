<script setup>
import { computed } from 'vue';
import { useFetch} from '../composables/fetch';
import { UseFullscreen } from '@vueuse/components';
import { useDark, useToggle, useFullscreen, useMediaQuery } from '@vueuse/core';

const { data } = useFetch(`https://reqres.in/api/users/3`);

const isDark = useDark({
    selector: 'body',
    attribute: 'color-scheme',
    valueDark: 'dark',
    valueLight: 'light'
});
const toggleDark = useToggle(isDark);

const { toggle } = useFullscreen();

const isLargeScreen = useMediaQuery('(min-width: 1024px)');

const tipoTela = computed (() => (isLargeScreen.value ? 'Desktop' : 'Mobile'));

const subtitulo = '<p style="color:silver">Tutorial Vue, .NET</p>';

const nome = computed(() => {
    if(!data.value) return "";
    return `${data.value.first_name} ${data.value.last_name}`;
});
</script>

<template>
    {{ tipoTela }}
    <UseFullscreen v-slot="{ toggle }">
        <div>
            <h1 class="title">{{ nome }}</h1>
            <span class="subtitle" v-html="subtitulo"></span>
        </div> 
        {{ true }}
        <button @click="toggleDark()">Muda tema</button>
        <button @click="toggle()">Full Screen</button>
        
    </UseFullscreen>
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