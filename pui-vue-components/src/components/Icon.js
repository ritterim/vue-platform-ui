import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Icon from './Icon.vue';

Vue.use(vueCustomElement);

Vue.customElement('pui-icon', {
  name: 'pui-icon',
  render: h => h(Icon)
})
