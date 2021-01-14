import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Modal from './Modal.vue';

Vue.config.ignoredElements = [
  'pui-modal',
];

Vue.use(vueCustomElement);

Vue.customElement('pui-modal', Modal);