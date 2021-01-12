import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import PillCircle from './PillCircle.vue';

Vue.config.ignoredElements = ['pui-pill-circle'];

Vue.use(vueCustomElement);

Vue.customElement('pui-pill-circle', PillCircle);
