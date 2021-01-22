import Accordion from './components/Accordion.vue';
import AccordionHeader from './components/AccordionHeader.vue';
import AccordionContent from './components/AccordionContent.vue';
import Card from './components/Card.vue';
import CardContent from './components/CardContent.vue';
import CardFooter from './components/CardFooter.vue';
import CardGroup from './components/CardGroup.vue';
import CardHeader from './components/CardHeader.vue';
import CardImage from './components/CardImage.vue';
import CardTitle from './components/CardTitle.vue';
import Drawer from './components/Drawer.vue';
import DrawerHeader from './components/DrawerHeader.vue';
import DrawerContent from './components/DrawerContent.vue';
import Button from './components/Button.vue';
import Menu from './components/Menu.vue';
import MenuDropdown from './components/MenuDropdown.vue';
import Blockquote from './components/Blockquote.vue';

export default {
  install: app => {
    app.component('pui-accordion', Accordion);
    app.component('pui-accordion-header', AccordionHeader);
    app.component('pui-accordion-content', AccordionContent);
    app.component('pui-button', Button);
    app.component('pui-card', Card);
    app.component('pui-card-content', CardContent);
    app.component('pui-card-footer', CardFooter);
    app.component('pui-card-group', CardGroup);
    app.component('pui-card-header', CardHeader);
    app.component('pui-card-image', CardImage);
    app.component('pui-card-title', CardTitle);
    app.component('pui-drawer', Drawer);
    app.component('pui-drawer-header', DrawerHeader);
    app.component('pui-drawer-content', DrawerContent);
    app.component('pui-menu', Menu);
    app.component('pui-menu-dropdown', MenuDropdown);
    app.component('pui-blockquote', Blockquote);
  }
};
