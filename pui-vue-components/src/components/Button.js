import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Button from './Button.vue';

Vue.use(vueCustomElement);

Vue.customElement('pui-button', {
  name: 'pui-button',
  render: h => h(Button)
})
