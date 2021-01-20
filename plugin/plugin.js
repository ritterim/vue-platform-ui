import Accordion from './components/Accordion.vue';
import Card from './components/Card.vue';
import Button from './components/Button.vue';
import Menu from './components/Menu.vue';
import MenuDropdown from './components/MenuDropdown.vue';
import Tabs from './components/Tabs.vue';
import Tab from './components/Tab.vue';

export default {
  install: (app) => {
    app.component('pui-accordion', Accordion);
    app.component('pui-card', Card);
    app.component('pui-button', Button);
    app.component('pui-menu', Menu);
    app.component('pui-menu-dropdown', MenuDropdown);
    app.component('pui-tabs', Tabs);
    app.component('pui-tab', Tab);
  }
}
