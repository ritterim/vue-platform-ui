import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Drawer from './Drawer.vue';

Vue.use(vueCustomElement);

Vue.customElement('pui-drawer', {
  name: 'pui-drawer',
  render: h => h(Drawer)
})
