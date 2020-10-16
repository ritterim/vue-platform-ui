import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Pill from './Pill.vue';

Vue.use(vueCustomElement);

Vue.customElement('pui-pill', {
  name: 'pui-pill',
  render: h => h(Pill)
})
