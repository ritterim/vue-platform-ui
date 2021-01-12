import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Accordion from './Accordion.vue';

Vue.config.ignoredElements = ['pui-accordion'];

Vue.use(vueCustomElement);

Vue.customElement('pui-accordion', Accordion)
