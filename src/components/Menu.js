import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Menu from './Menu.vue';

Vue.use(vueCustomElement);

Vue.customElement('pui-menu', {
  name: 'pui-menu',
  render: h => h(Menu)
})
