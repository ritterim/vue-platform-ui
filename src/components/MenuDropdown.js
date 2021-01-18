import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import MenuDropdown from './MenuDropdown.vue';

Vue.config.ignoredElements = ['pui-menu-dropdown'];

Vue.use(vueCustomElement);

Vue.customElement('pui-menu-dropdown', MenuDropdown);