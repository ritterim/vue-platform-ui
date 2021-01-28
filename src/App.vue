<template>
  <div class="mx-4">
    <!-- Accordion -->
    <div class="block-container m-3">
      <div class="block laptop-up-6">
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
    </div>

    <!-- Button -->
    <div class="block-container m-2">
      <div class="block laptop-up-3">
        <h2 class="mt-6">Button</h2>
        <pui-button @click="buttonClick">My Button</pui-button>
        <pui-button @click="buttonClick" size="large"
          >My Large Button</pui-button
        >
      </div>
    </div>

    <!-- Cards -->
    <div class="block-container m-2">
      <div class="block laptop-up-3">
        <h2 class="mt-6">Cards</h2>
        <pui-card> Simple card! </pui-card>
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
    <div class="block mt-3">
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
      <pui-tabs flat>
        <pui-tab header="Shirts" index="shirts" name="tabs-2">
          This is tab content
        </pui-tab>
        <pui-tab header="Shoes" index="shoes" name="tabs-2" checked>
          This is tab content for number 2
        </pui-tab>
        <pui-tab header="Pants" index="pants" name="tabs-2">
          This is tab content for number 3
        </pui-tab>
      </pui-tabs>
      <pui-tabs flat unresponsive>
        <pui-tab header="Ties" index="a" name="tabs-3">
          This is tab content
        </pui-tab>
        <pui-tab header="Birds" index="b" name="tabs-3">
          This is tab content for number 2
        </pui-tab>
        <pui-tab header="Words" index="c" name="tabs-3" checked>
          This is tab content for number 3
        </pui-tab>
      </pui-tabs>
      <pui-tabs>
        <pui-tab header="Folders" index="folders" name="tabs-4" icon="pi-folder-open">
          This is tab content
        </pui-tab>
        <pui-tab header="Birds" index="birds" name="tabs-4" icon="pi-folder">
          This is tab content for number 2
        </pui-tab>
        <pui-tab header="Words" index="words" name="tabs-4" icon="pi-warning" checked>
          This is tab content for number 3
        </pui-tab>
      </pui-tabs>
    </div>
  </div>
  <div class="mt-3">
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
  <div class="mt-3">
    <pui-blockquote>
      Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.
    </pui-blockquote>
    <pui-blockquote class="border--color-orange">
      Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.
    </pui-blockquote>
    <pui-blockquote citeURL="https://www.goodreads.com/quotes/tag/american-literature">
      Perhaps as you went along you did learn something. I did not care what it was all about. All I wanted to know was how to live in it. Maybe if you found out how to live in it you learned from that what it was all about.
    </pui-blockquote>
    <pui-blockquote citeURL="https://www.goodreads.com/quotes/tag/american-literature" cite="The Sun Also Rises" author="Ernest Hemingway">
      Perhaps as you went along you did learn something. I did not care what it was all about. All I wanted to know was how to live in it. Maybe if you found out how to live in it you learned from that what it was all about.
    </pui-blockquote>
    <pui-blockquote author="Mark Twain">
      Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.
    </pui-blockquote>

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

    <!-- Menus -->
    <div class="block-container m-2">
      <div class="block laptop-up-6">
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

    <!-- Blockquote -->
    <div class="block-container m-2">
      <div class="block laptop-up-6">
        <h2 class="mt-6">Blockquote</h2>
        <pui-blockquote>
          Anger is an acid that can do more harm to the vessel in which it is
          stored than to anything on which it is poured.
        </pui-blockquote>
        <pui-blockquote class="border--color-orange">
          Anger is an acid that can do more harm to the vessel in which it is
          stored than to anything on which it is poured.
        </pui-blockquote>
        <pui-blockquote
          citeURL="https://www.goodreads.com/quotes/tag/american-literature"
        >
          Perhaps as you went along you did learn something. I did not care what
          it was all about. All I wanted to know was how to live in it. Maybe if
          you found out how to live in it you learned from that what it was all
          about.
        </pui-blockquote>
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
        <pui-blockquote author="Mark Twain">
          Anger is an acid that can do more harm to the vessel in which it is
          stored than to anything on which it is poured.
        </pui-blockquote>
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
      <div class="block laptop-up-4">
        <h2 class="mt-6">Figure Hover</h2>
        <pui-figure-hover
          src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          caption="This is my caption!"
        ></pui-figure-hover>
      </div>
    </div>

    <div class="block-container m-2">
      <div class="block laptop-up-4">
        <h2 class="mt-6">Icons</h2>
        <pui-icon icon="pi-learn"></pui-icon>
        <pui-icon icon="pi-learn" size="sm"></pui-icon>
        <pui-icon icon="pi-learn" size="lg"></pui-icon>
        <pui-icon icon="pi-learn" size="xl"></pui-icon>
        <pui-icon icon="pi-learn" size="xxl"></pui-icon>
      </div>
    </div>
        <h2 class="mt-6">Image Round</h2>
        <pui-image-round
          src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          size="sm"
          alt="Purple mountains">
        </pui-image-round>
        <pui-image-round
          src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          size="md"
          alt="Purple mountains">
        </pui-image-round>
        <pui-image-round
          src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          size="lg"
          alt="Purple mountains">
        </pui-image-round>
      </div>
    </div>

  </div>
  <div class="p-5">
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
    <pui-table :headers="['Dog', 'Cat', 'Human']" unresponsive>
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
    <pui-table :headers="['Dog', 'Cat', 'Human']" hoverOff>
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
    <pui-table :headers="['Dog', 'Cat', 'Human']" unresponsive>
      <pui-table-row>
        <pui-table-cell>Pit Bull</pui-table-cell>
        <pui-table-cell>Short Hair</pui-table-cell>
        <pui-table-cell>Austin</pui-table-cell>
      </pui-table-row>
      <pui-table-row>
        <pui-table-cell>German Shepherd</pui-table-cell>
        <pui-table-cell>Long Hair</pui-table-cell>
        <pui-table-cell>Kevin</pui-table-cell>
      </pui-table-row>
      <pui-table-row>
        <pui-table-cell>Poodle</pui-table-cell>
        <pui-table-cell>Maine Coon</pui-table-cell>
        <pui-table-cell>Beth</pui-table-cell>
      </pui-table-row>
    </pui-table>
    <pui-table :headers="['', 'Option One', 'Option Two']" unresponsive>
      <pui-table-row>
        <pui-table-cell>Desc</pui-table-cell>
        <pui-table-cell>Pork Buns</pui-table-cell>
        <pui-table-cell>Pork Buns</pui-table-cell>
      </pui-table-row>
      <pui-table-row>
        <pui-table-cell>Price</pui-table-cell>
        <pui-table-cell>$5.00</pui-table-cell>
        <pui-table-cell>$9.00</pui-table-cell>
      </pui-table-row>
      <pui-table-row>
        <pui-table-cell>Quanity</pui-table-cell>
        <pui-table-cell>5</pui-table-cell>
        <pui-table-cell>2</pui-table-cell>
      </pui-table-row>
    </pui-table>
    <pui-table :headers="['Dog', 'Cat', 'Human']">
      <pui-table-row>
        <pui-table-cell label="Dog"><img src="./assets/dog1.jpg" alt="dog" style="height: 200px"></pui-table-cell>
        <pui-table-cell label="Cat"><img src="./assets/yuumi.jpg" alt="cat" style="height: 200px"></pui-table-cell>
        <pui-table-cell label="Human"><i class='pi-user-solid pi-xxl'></i></pui-table-cell>
      </pui-table-row>
      <pui-table-row>
        <pui-table-cell label="Dog"><img src="./assets/dog2.jpg" alt="dog" style="height: 200px"></pui-table-cell>
        <pui-table-cell label="Cat"><i class='pi-twitter pi-xxl'></i></pui-table-cell>
        <pui-table-cell label="Human"><i class='pi-ritter pi-xxl'></i></pui-table-cell>
      </pui-table-row>
      <pui-table-row>
        <pui-table-cell label="Dog"><i class='pi-dollar pi-xxl'></i></pui-table-cell>
        <pui-table-cell label="Cat"><img src="./assets/momo.jpg" alt="cat" style="height: 200px"></pui-table-cell>
        <pui-table-cell label="Human"><i class='pi-bank pi-xxl'></i></pui-table-cell>
      </pui-table-row>
    </pui-table>
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
