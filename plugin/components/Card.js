import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Card from './Card.vue';

Vue.use(vueCustomElement);

Vue.customElement('pui-card', {
  name: 'pui-card',
  render: h => h(Card)
})
