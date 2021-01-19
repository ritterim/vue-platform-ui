import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import ToolTip from './ToolTip.vue';

Vue.use(vueCustomElement);

Vue.customElement('pui-tool-tip', {
  name: 'pui-tool-tip',
  render: h => h(ToolTip)
})
