import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';

import Pill from './Pill.vue';


Vue.config.ignoredElements = ['pui-pill'];

Vue.use(vueCustomElement);

Vue.customElement('pui-pill', Pill)
