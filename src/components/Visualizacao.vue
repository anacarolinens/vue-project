
<script setup>
import Cabecalho from './Cabecalho.vue';

</script>

<template>
    <!--<Teleport to="body">-->
        <Navbar v-once></Navbar>
    <!--</Teleport>-->
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