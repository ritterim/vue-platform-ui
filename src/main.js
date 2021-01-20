<<<<<<< HEAD
import './components/Accordion.js';
import '../node_modules/@ritterim/platform-ui/dist/platform-ui.min.css';
import './components/Menu.js'
import './components/MenuDropdown.js'
=======
import { createApp } from 'vue';
import App from './App.vue';
import PuiPlugin from '../plugin/plugin.js';

const app = createApp(App);

app.use(PuiPlugin);
app.mount('#app');
>>>>>>> master
