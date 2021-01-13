import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Icon from './Icon.vue';

Vue.config.ignoredElements = ['pui-icon'];

Vue.use(vueCustomElement);

Vue.customElement('pui-icon', Icon)
