<script setup>
const nome = 'Usuários';
const subtitulo = '<p style="color:silver">Tutorial Vue, .NET</p>';
</script>
<template>
    <div>
        <h1 class="title" v-email="nome"></h1>
        <span class="subtitle" v-html="subtitulo"></span>
       <!-- <span v-text="subtitulo"></span>
        <span>{{ subtitulo }}</span>>-->
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