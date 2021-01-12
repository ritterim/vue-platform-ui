import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import PillContent from './PillContent.vue';

Vue.config.ignoredElements = ['pui-pill-content'];

Vue.use(vueCustomElement);

Vue.customElement('pui-pill-content', PillContent);
