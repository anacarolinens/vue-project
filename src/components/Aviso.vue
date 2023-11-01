<script setup>
import { inject } from 'vue';
import Aviso from '../components/Aviso.vue'

const aviso = inject("aviso");

const chamaAlert = () => {
    alert("clicou");
};

defineExpose({aviso, chamaAlert});

</script>
<template>
    <div class="aviso">
        {{ aviso }}
    </div>
</template>



<style scoped>
.aviso{
    font-size: 0.575rem;
    text-align: center;
}
</style>