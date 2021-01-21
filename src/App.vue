<template>
  <div class="mx-4">
    <!-- Button -->
    <div class="block-container m-2">
      <div class="block laptop-up-3">
        <h2 class="mt-6">Button</h2>
        <pui-button>My Button</pui-button>
        <pui-button size="large">My Large Button</pui-button>
      </div>
    </div>

    <!-- Cards -->
    <div class="block-container m-2">
      <div class="block laptop-up-3">
        <h2 class="mt-6">Cards</h2>
        <pui-card>Simple card! </pui-card>
      </div>
    </div>

    <div class="block-container m-2">
      <div class="block laptop-up-3">
        <pui-card>
          <pui-card-header>
            <pui-card-group>
              <i class="pi-quill"></i>
              <pui-card-title>This is the header!</pui-card-title>
            </pui-card-group>
            <pui-button>My Button</pui-button>
          </pui-card-header>
          <pui-card-content> This is the content! </pui-card-content>
        </pui-card>
      </div>
    </div>

    <div class="block-container m-2">
      <div class="block laptop-up-3">
        <pui-card>
          <pui-card-header>
            <pui-card-group>
              <i class="pi-quill"></i>
              <pui-card-title>This is the header!</pui-card-title>
            </pui-card-group>
            <pui-button>My Button</pui-button>
          </pui-card-header>
          <pui-card-content> This is the content! </pui-card-content>
        </pui-card>
      </div>
    </div>

    <div class="block-container m-2">
      <div class="block laptop-up-3">
        <pui-card>
          <pui-card-header>This is the header</pui-card-header>
          <pui-card-content>This is the content</pui-card-content>
          <pui-card-footer>This is the footer</pui-card-footer>
        </pui-card>
      </div>
    </div>

    <div class="block-container m-2">
      <div class="block laptop-up-6">
        <h2 class="mt-6">Drawer</h2>
        <pui-button @click="toggleDrawer">Open Drawer</pui-button>
        <pui-button @click="toggleSingleDrawer">Open Single Drawer</pui-button>
        <pui-button @click="toggleLeftDrawer">Open Left Drawer</pui-button>
        <pui-button @click="toggleRightDrawer">Open Right Drawer</pui-button>
      </div>
    </div>

    <pui-drawer :open="drawerOpen">
      <pui-drawer-header>
        My Drawer Header
        <pui-button @click="toggleDrawer">Close Drawer</pui-button>
      </pui-drawer-header>
      <pui-drawer-content> My Drawer Content </pui-drawer-content>
    </pui-drawer>

    <pui-drawer :open="drawerSingleOpen" size="single">
      <pui-drawer-header>
        My Drawer Header
        <pui-button @click="toggleSingleDrawer">Close Drawer</pui-button>
      </pui-drawer-header>
      <pui-drawer-content> My Drawer Content </pui-drawer-content>
    </pui-drawer>

    <pui-drawer :open="drawerLeftOpen" direction="left">
      <pui-drawer-header>
        My Drawer Header
        <pui-button @click="toggleLeftDrawer">Close Drawer</pui-button>
      </pui-drawer-header>
      <pui-drawer-content> My Drawer Content </pui-drawer-content>
    </pui-drawer>

    <pui-drawer :open="drawerRightOpen" direction="right">
      <pui-drawer-header>
        My Drawer Header
        <pui-button @click="toggleRightDrawer">Close Drawer</pui-button>
      </pui-drawer-header>
      <pui-drawer-content> My Drawer Content </pui-drawer-content>
    </pui-drawer>

    <div class="block-container m-2">
      <div class="block block-12">
        <h2 class="mt-6">Menu</h2>
        <pui-menu>
          <a class="site-menu__item">Item 1</a>
          <a class="site-menu__item">Item 2</a>
          <a class="site-menu__item">Item 3</a>
          <a class="site-menu__item">Item 4</a>
          <a class="site-menu__item">Item 5</a>
        </pui-menu>
        <pui-menu menu-style="bordered">
          <a class="site-menu__item">Item 1</a>
          <a class="site-menu__item">Item 2</a>
          <a class="site-menu__item">Item 3</a>
          <a class="site-menu__item">Item 4</a>
          <a class="site-menu__item">Item 5</a>
        </pui-menu>
        <pui-menu menu-style="underlined">
          <a class="site-menu__item">Item 1</a>
          <a class="site-menu__item">Item 2</a>
          <a class="site-menu__item">Item 3</a>
          <a class="site-menu__item">Item 4</a>
          <a class="site-menu__item">Item 5</a>
        </pui-menu>
        <pui-menu menu-classes="background-med-blue">
          <a class="site-menu__item">Item 1</a>
          <a class="site-menu__item">Item 2</a>
          <a class="site-menu__item">Item 3</a>
          <a class="site-menu__item">Item 4</a>
          <a class="site-menu__item">Item 5</a>
        </pui-menu>
        <pui-menu menu-classes="background-med-blue">
          <pui-menu-dropdown header="Item 1">
            <a href="#" class="dropdown__content-item">Item 1</a>
            <a href="#" class="dropdown__content-item">Item 2</a>
            <a href="#" class="dropdown__content-item">Item 3</a>
            <a href="#" class="dropdown__content-item">Item 4</a>
            <a href="#" class="dropdown__content-item">Item 5</a>
          </pui-menu-dropdown>
          <pui-menu-dropdown header="Item 2">
            <a href="#" class="dropdown__content-item">Item 1</a>
            <a href="#" class="dropdown__content-item">Item 2</a>
            <a href="#" class="dropdown__content-item">Item 3</a>
            <a href="#" class="dropdown__content-item">Item 4</a>
            <a href="#" class="dropdown__content-item">Item 5</a>
          </pui-menu-dropdown>
          <a class="site-menu__item">Item 3</a>
        </pui-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      accordionOpen: false,
      drawerOpen: false,
      drawerSingleOpen: false,
      drawerLeftOpen: false,
      drawerRightOpen: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.accordionOpen = !this.accordionOpen;
    },
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },
    toggleSingleDrawer() {
      this.drawerSingleOpen = !this.drawerSingleOpen;
    },
    toggleLeftDrawer() {
      this.drawerLeftOpen = !this.drawerLeftOpen;
    },
    toggleRightDrawer() {
      this.drawerRightOpen = !this.drawerRightOpen;
    },
  },
};
</script>
