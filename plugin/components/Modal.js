import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Modal from './Modal.vue';

Vue.use(vueCustomElement);

Vue.customElement('pui-modal', {
  name: 'pui-modal',
  render: h => h(Modal)
})
