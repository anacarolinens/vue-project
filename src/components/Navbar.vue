
<script setup>
//Diretiva v-for
const menus = [
    {id: 1, nome: 'Home', path: '/'},
    {id: 2, nome: 'Sobre', path: '/equipe'}, 
];

</script>
<template>
    <nav>
        <span>Tutorial Vue</span>   
        <ul>
            <li v-for="menu in menus" :key="menu.id">
            <RouterLink :to="menu.path">{{ menu.nome }}
            </RouterLink></li>
        </ul>
    </nav>
</template>



<style scoped>
nav {
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-self: center;
    background: #cae7e8;
}
ul {
    display: flex;
    list-style-type: none;
}
ul li {
    padding: 0 5px;
}
ul li a {
    text-decoration: none;
    color: #117177;
}
</style>