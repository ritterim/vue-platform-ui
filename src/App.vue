<template>
  <div class="m-4">
    <h1>Platform UI Vue Components</h1>

    <div class="block-container">
      <!-- Accordion -->
      <div class="block laptop-up-4 p-4">
        <h2>Accordion</h2>
        <pui-accordion :active="accordionOpen">
          <pui-accordion-header
            class="px-3 py-3 flex--justify-between flex--align-center text-med-blue"
            :active="accordionOpen"
            @click="toggleAccordion"
          >
            Hello, World!
            <i class="pi-angle-down accordion__icon" aria-hidden="true"></i>
          </pui-accordion-header>
          <pui-accordion-content :active="accordionOpen" class="px-3 py-3">
            This is my accordion content!
          </pui-accordion-content>
        </pui-accordion>
      </div>

      <!-- Blockquote -->
      <div class="block laptop-up-4 p-4">
        <h2>Blockquote</h2>
        <pui-blockquote
          citeURL="https://www.goodreads.com/quotes/tag/american-literature"
          cite="The Sun Also Rises"
          author="Ernest Hemingway"
        >
          Perhaps as you went along you did learn something. I did not care what
          it was all about. All I wanted to know was how to live in it. Maybe if
          you found out how to live in it you learned from that what it was all
          about.
        </pui-blockquote>
      </div>

      <!-- Button -->
      <div class="block laptop-up-4 p-4">
        <h2>Button</h2>
        <pui-button>This is a Button</pui-button>
        <pui-button size="lg">This is a Button</pui-button>
      </div>
    </div>

    <div class="block-container">
      <!-- Card -->
      <div class="block laptop-up-4 p-4">
        <h2>Card</h2>
        <pui-card>
          <pui-card-header>
            <pui-card-group>
              <i class="pi-quill"></i>
              <pui-card-title>This is the header!</pui-card-title>
            </pui-card-group>
            <pui-button>My Button</pui-button>
          </pui-card-header>
          <pui-card-content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nam
              facere ab officiis vero recusandae sapiente explicabo
              exercitationem aut fuga, soluta, eaque a neque amet vel cum
              consequuntur tenetur. Et.
            </p>
          </pui-card-content>
        </pui-card>
      </div>

      <!-- Drawer -->
      <div class="block laptop-up-4 p-4">
        <h2>Drawer</h2>
        <div class="flex flex--align-center flex--justify-center flex--wrap">
          <pui-button class="m-2" @click="toggleDrawer">Open Drawer</pui-button>
          <pui-button class="m-2" @click="toggleSingleDrawer"
            >Open Single Drawer</pui-button
          >
          <pui-button class="m-2" @click="toggleLeftDrawer"
            >Open Left Drawer</pui-button
          >
          <pui-button class="m-2" @click="toggleRightDrawer"
            >Open Right Drawer</pui-button
          >
        </div>
      </div>

      <!-- Figure Hover -->
      <div class="block laptop-up-4 p-4">
        <h2>Figure Hover</h2>
        <pui-figure-hover
          src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          caption="This is my caption!"
        ></pui-figure-hover>
      </div>
    </div>

    <div class="block-container">

      <!-- Info Box -->
      <div class="block laptop-up-4 p-4">
        <h2>Info Box</h2>
      </div>

      <!-- Loader -->
      <div class="block laptop-up-4 p-4">
        <h2>Loader</h2>
        <div class="flex flex--align-center flex--justify-center">
          <pui-loader class="mx-2" size="sm"></pui-loader>
          <pui-loader class="mx-2"></pui-loader>
          <pui-loader class="mx-2" size="lg"></pui-loader>
        </div>
      </div>

      <!-- Menu -->
      <div class="block laptop-up-4 p-4">
        <h2>Menu</h2>
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

    <div class="block-container">
      <!-- Message -->
      <div class="block laptop-up-4 p-4">
        <h2>Message</h2>
        <!-- Needs completed -->
      </div>

      <!-- Modal -->
      <div class="block laptop-up-4 p-4">
        <h2>Modal</h2>
        <!-- Needs completed -->
      </div>

      <!-- Pill -->
      <div class="block laptop-up-4 p-4">
        <h2>Pill</h2>
        <!-- Needs completed -->
      </div>
    </div>

    <div class="block-container">
      <!-- Tabs -->
      <div class="block laptop-up-4 p-4">
        <h2>Tab</h2>
        <pui-tabs>
          <pui-tab header="Tab 1" index="1" name="tabs-1" checked>
            This is tab content
          </pui-tab>
          <pui-tab header="Tab 2" index="2" name="tabs-1">
            This is tab content for number 2
          </pui-tab>
          <pui-tab header="Tab 3" index="3" name="tabs-1">
            This is tab content for number 3
          </pui-tab>
        </pui-tabs>
      </div>

      <div class="block laptop-up-4 p-4">
        <h2>Tables</h2>
        <pui-table :headers="['Dog', 'Cat', 'Human']">
          <pui-table-row>
            <pui-table-cell label="Dog">Pit Bull</pui-table-cell>
            <pui-table-cell label="Cat">Short Hair</pui-table-cell>
            <pui-table-cell label="Human">Austin</pui-table-cell>
          </pui-table-row>
          <pui-table-row>
            <pui-table-cell label="Dog">German Shepherd</pui-table-cell>
            <pui-table-cell label="Cat">Long Hair</pui-table-cell>
            <pui-table-cell label="Human">Kevin</pui-table-cell>
          </pui-table-row>
          <pui-table-row>
            <pui-table-cell label="Dog">Poodle</pui-table-cell>
            <pui-table-cell label="Cat">Maine Coon</pui-table-cell>
            <pui-table-cell label="Human">Beth</pui-table-cell>
          </pui-table-row>
        </pui-table>
      </div>

      <!-- Tooltip -->
      <div class="block laptop-up-4 p-4">
        <h2>Tooltip</h2>
        <!-- Needs completed -->
      </div>
    </div>
  </div>

  <!-- Drawers -->
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
    buttonClick() {
      console.log('clicked!');
    },
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
