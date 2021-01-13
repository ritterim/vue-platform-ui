import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Button from './Button.vue';

Vue.config.ignoredElements = ['pui-button'];

Vue.use(vueCustomElement);

Vue.customElement('pui-button', Button)
