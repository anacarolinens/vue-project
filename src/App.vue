<script setup> 
import Cabecalho from './components/Cabecalho.vue';
import Visualizacao from './components/Visualizacao.vue';



</script>

<template>
    <Visualizacao>
      <template v-slot:footer>Rodapé da página</template>
      <!-- <template v-slot:cabecalho>
        <Cabecalho>
          <template v-slot="{mensagem, funcao}">
            <p class="titulo">{{ mensagem }}</p>
            <button @click="funcao">Clique aqui</button>
          </template>
        </Cabecalho>
      </template> -->
      <router-view></router-view>
      
    </Visualizacao>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

}

header {
  line-height: 1.5;
}

[color-scheme='dark']{ 
    background-color: black;
    color: white;
}
[color-scheme='light']{ 
    background-color: white;
    color: black;
}
</style>
