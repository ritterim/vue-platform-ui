import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';

import Pill from './Pill.vue';
import PillContent from './PillContent.vue';
import PillLabel from './PillLabel.vue';

// Attempt to corect console error by registering
// these components... (did not work)
Vue.component('pui-pill-content', PillContent);
Vue.component('pui-pill-label', PillLabel);

Vue.config.ignoredElements = ['pui-pill'];

Vue.use(vueCustomElement);

Vue.customElement('pui-pill', Pill);
