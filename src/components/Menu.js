import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Menu from './Menu.vue';

Vue.config.ignoredElements = ['pui-menu'];

Vue.use(vueCustomElement);

Vue.customElement('pui-menu', Menu);