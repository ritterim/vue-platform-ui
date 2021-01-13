import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Drawer from './Drawer.vue';

Vue.config.ignoredElements = ['pui-drawer'];

Vue.use(vueCustomElement);

Vue.customElement('pui-drawer', Drawer)
