import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Message from './Message.vue';

Vue.use(vueCustomElement);

Vue.customElement('pui-message', {
  name: 'pui-message',
  render: h => h(Message)
})
