import { createApp } from 'vue';
import App from './App.vue';
import PuiPlugin from './plugin.js';

const app = createApp(App);

app.use(PuiPlugin);
app.mount('#app');
