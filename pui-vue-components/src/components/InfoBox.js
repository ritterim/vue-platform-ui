import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import InfoBox from './InfoBox.vue';

Vue.use(vueCustomElement);

Vue.customElement('pui-info-box', {
  name: 'pui-info-box',
  render: h => h(InfoBox)
})
