import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import FigureHover from './FigureHover.vue';

Vue.use(vueCustomElement);

Vue.customElement('pui-figure-hover', {
  name: 'pui-figure-hover',
  render: h => h(FigureHover)
})
