import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import FigureHover from './FigureHover.vue';

Vue.config.ignoredElements = ['pui-figure-hover'];

Vue.use(vueCustomElement);

Vue.customElement('pui-figure-hover', FigureHover);
