import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Accordion from './Accordion.vue';

Vue.use(vueCustomElement);

Vue.customElement('pui-accordion', {
  name: 'pui-accordion',
  render: h => h(Accordion)
})
