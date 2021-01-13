import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Message from './Message.vue';

Vue.config.ignoredElements = ['pui-message'];

Vue.use(vueCustomElement);

Vue.customElement('pui-message', Message);
