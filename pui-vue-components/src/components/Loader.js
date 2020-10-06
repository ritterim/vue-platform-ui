import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Loader from './Loader.vue';

Vue.use(vueCustomElement);

Vue.customElement('pui-loader', {
  name: 'pui-loader',
  render: h => h(Loader)
})
