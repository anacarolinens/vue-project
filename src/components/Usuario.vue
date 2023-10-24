<script setup> 
import { ref} from 'vue'
    const nome = ref('Seu nome');
    const anoNascimento = ref(0);
    const idade = ref(0);
    const idadeFutura = ref(0);

    const calcularIdade = () => {
        debugger;
        idade.value = 2023 - anoNascimento.value;
    }

    const calcularIdadeFutura = (valor) => {
        debugger;
        idadeFutura.value = idade.value + valor;
    }
    
</script>

<template>
    <div>
        <form class="formulario">
            <label for="nome">Nome:</label><br/>
            <input type="text" id="nome" name="nome" v-model="nome"><br/>

            <label for="anoNascimento">Ano de Nascimento:</label><br/>
            <input type="number" id="anoNascimento" name="anoNascimento" v-model="anoNascimento"><br/>
        </form>
    </div>

    <button class="botao" v-on:click="calcularIdade"> Calcular idade </button>
    <p style="text-align: center;">{{ nome }} tem {{ idade }} anos.</p>

    <button class="botao" v-on:click="$event => calcularIdadeFutura(2)"> +2 </button>
    <p style="text-align: center;">{{ nome }} terá {{ idadeFutura }} anos.</p>
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

.botao:hover {
    background: rgb(102,147,147);
}


</style>