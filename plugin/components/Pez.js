import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Pez from './Pez.vue';

Vue.use(vueCustomElement);

Vue.customElement('pui-pez', {
  name: 'pui-pez',
  render: h => h(Pez)
})
