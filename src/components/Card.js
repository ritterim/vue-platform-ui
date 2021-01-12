import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Card from './Card.vue';

Vue.config.ignoredElements = ['pui-card'];

Vue.use(vueCustomElement);

Vue.customElement('pui-card', Card)
