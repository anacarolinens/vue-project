import { createApp } from 'vue';
import App from './App.vue';
import Navbar from './components/Navbar.vue';
import router from "./router";

const  app = createApp(App);
app.component('Navbar', Navbar);
//Diretiva personalizada Global
app.directive ('email', {
    created(el, biding) {
        el.innerHTML = `<a href="mailto:${biding.value}">${biding.value}</a>`
    },
});
app.use(router)
app.mount('#app');
