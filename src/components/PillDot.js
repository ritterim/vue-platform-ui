import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import PillDot from './PillDot.vue';

Vue.config.ignoredElements = ['pui-pill-dot'];

Vue.use(vueCustomElement);

Vue.customElement('pui-pill-dot', PillDot);
