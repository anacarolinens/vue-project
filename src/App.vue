<script setup> 
import Cabecalho from './components/Cabecalho.vue';
import Usuario from './components/Usuario.vue';
import ListaUsuario from './components/ListaUsuario.vue';
</script>

<template>
  <Navbar v-once></Navbar>
  <header>
    <Cabecalho></Cabecalho>
  </header>

  <main>
    <!--<Usuario></Usuario>-->

    <ListaUsuario></ListaUsuario>
  </main>
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
