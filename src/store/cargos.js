import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCargos = defineStore('cargos', () => {
    
    const cargos = ref([]);
    const paletas = ref([]);


    const adicionaCargo = (funcionario) => {
        cargos.value = cargos.value.filter((x) => x.id !== funcionario.id);
        cargos.value.push(funcionario);
    };

    const removeCargo = (id) => {
        cargos.value = cargos.value.filter((x) => x.id !== id)
    };

    const buscaCores = async () => {
        const res = await fetch("https://reqres.in/api/unknown");
        paletas.value = (await res.json()).data;
    };

    const cores = computed(() => paletas.value.map((x) => x.color));
    const totalCargos = computed (() => cargos.value.length);

    return {
        adicionaCargo, 
        totalCargos,
        cargos,
        removeCargo,
        buscaCores, 
        cores,
    };
});