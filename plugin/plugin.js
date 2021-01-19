import Accordion from './components/Accordion.vue';

export default {
  install: (app) => {
    app.component('pui-accordion', Accordion);
  }
}
