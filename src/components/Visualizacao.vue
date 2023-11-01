
<script setup>
import Cabecalho from './Cabecalho.vue';

</script>

<template>
    <Navbar v-once></Navbar>
    <header>
        <slot name="cabecalho"></slot>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
</template>


<style lang="scss" scoped>

</style>