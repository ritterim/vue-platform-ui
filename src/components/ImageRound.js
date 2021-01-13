import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import ImageRound from './ImageRound.vue';

Vue.config.ignoredElements = ['pui-image-round'];

Vue.use(vueCustomElement);

Vue.customElement('pui-image-round', ImageRound);
