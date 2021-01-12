import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import PillLabel from './PillLabel.vue';

Vue.config.ignoredElements = ['pui-pill-label'];

Vue.use(vueCustomElement);

Vue.customElement('pui-pill-label', PillLabel);
