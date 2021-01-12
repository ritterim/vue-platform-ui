import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import ToolTip from './ToolTip.vue';

Vue.config.ignoredElements = ['pui-tool-tip'];

Vue.use(vueCustomElement);

Vue.customElement('pui-tool-tip', ToolTip);
