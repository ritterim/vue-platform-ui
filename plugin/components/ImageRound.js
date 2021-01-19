import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import ImageRound from './ImageRound.vue';

Vue.use(vueCustomElement);

Vue.customElement('pui-image-round', {
  name: 'pui-image-round',
  render: h => h(ImageRound)
})
