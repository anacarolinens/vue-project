import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useStorage } from "@vueuse/core";

export const useLogin = defineStore('login', () => {
 
    const usuarioLogado = ref("");

    function logarUsuario(nome) {
        usuarioLogado.value = nome
        const storage = useStorage('Usuario Logado', name);
        console.log(storage.value);
    }

    const logado = computed(() => !!usuarioLogado.value.length);

    return{
        usuarioLogado,
        logarUsuario,
        logado,
    }
});