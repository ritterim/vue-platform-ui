import Accordion from './components/Accordion.vue';
import AccordionHeader from './components/AccordionHeader.vue';
import AccordionContent from './components/AccordionContent.vue';
import Card from './components/Card.vue';
import Button from './components/Button.vue';

export default {
  install: (app) => {
    app.component('pui-accordion', Accordion);
    app.component('pui-accordion-header', AccordionHeader);
    app.component('pui-accordion-content', AccordionContent);
    app.component('pui-card', Card);
    app.component('pui-button', Button);
  }
}
