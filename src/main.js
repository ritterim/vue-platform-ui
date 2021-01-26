import { createApp } from 'vue';
import App from './App.vue';
import PuiPlugin from '../plugin/plugin.js';
import '@ritterim/platform-ui/dist/platform-ui.min.css'

const app = createApp(App);

app.use(PuiPlugin);
app.mount('#app');
