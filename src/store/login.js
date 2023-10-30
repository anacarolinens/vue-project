import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useLogin = defineStore('login', () => {
 
    const usuarioLogado = ref("");

    function logarUsuario(none) {
        usuarioLogado.value = none
    }

    const logado = computed(() => !usuarioLogado.value.length);

    return{
        usuarioLogado,
        logarUsuario,
        logado,
    }
});