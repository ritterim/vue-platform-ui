import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Loader from './Loader.vue';

Vue.config.ignoredElements = ['pui-loader'];

Vue.use(vueCustomElement);

Vue.customElement('pui-loader', Loader)
