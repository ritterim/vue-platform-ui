<template>
  <div class="mx-4 py-4">
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
        <pui-button @click="buttonClick" size="large">My Large Button</pui-button>
      </div>
    </div>

    <!-- Cards -->
    <div class="block-container m-2">
      <div class="block laptop-up-3">
        <h2 class="mt-6">Cards</h2>
        <pui-card>
          Simple card!
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

    <div class="block-container m-4">
      <div class="block laptop-up-4">
        <h2 class="mt-6">Figure Hover</h2>
        <pui-figure-hover 
          src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          caption="This is my caption!"
        ></pui-figure-hover>
      </div>
    </div>

    <pui-form action="">
      <pui-form-input id="first-name" type="text" placeholder="First Name">First Name</pui-form-input>
      <pui-form-input id="last-name" type="text" placeholder="Last Name">Last Name</pui-form-input>
    </pui-form>
    <pui-form action="" bordered class="laptop-up-4 p-2">
      <pui-form-input id="first-name" type="text" placeholder="First Name">First Name</pui-form-input>
      <pui-form-input id="last-name" type="text" placeholder="Last Name">Last Name</pui-form-input>
      <pui-form-input id="dob" type="date">Birthday</pui-form-input>
      <pui-form-input id="zipcode" type="tel" placeholder="e.g.90012">ZIP Code</pui-form-input>
    </pui-form>
    <pui-form action="" rounded class="laptop-up-4 p-2">
      <pui-form-input id="first-name" type="text" placeholder="First Name">First Name</pui-form-input>
      <pui-form-input id="last-name" type="text" placeholder="Last Name">Last Name</pui-form-input>
      <pui-form-input id="dob" type="date">Birthday</pui-form-input>
      <pui-form-input id="zipcode" type="tel" placeholder="e.g.90012">ZIP Code</pui-form-input>
    </pui-form>
    <pui-form action="" class="laptop-up-4 desktop-up-6 p-2">
      <pui-form-input id="first-name" type="text" placeholder="First Name">First Name</pui-form-input>
      <pui-form-input id="last-name" type="text" placeholder="Last Name" error>Last Name</pui-form-input>
      <pui-form-input id="dob" type="date">Birthday</pui-form-input>
      <pui-form-input 
        id="zipcode" 
        type="tel" 
        placeholder="e.g.90012" 
        pattern="^\d{5,6}(?:[-\s]\d{4})?$">
        ZIP Code
      </pui-form-input>
      <pui-form-fieldset header="Error on entire fieldset" error>
        <pui-form-checkbox id="this">This</pui-form-checkbox>
        <pui-form-checkbox id="that">That</pui-form-checkbox>
      </pui-form-fieldset>
      <pui-form-fieldset header="Error on individual input">
        <pui-form-checkbox id="this-one" error>This One</pui-form-checkbox>
        <pui-form-checkbox id="that-one">That One</pui-form-checkbox>
      </pui-form-fieldset>
    </pui-form>
    <pui-form action="" class="my-3">
      <pui-form-input-fancy id="first-name" type="text" placeholder="First Name">First Name</pui-form-input-fancy>
      <pui-form-input-fancy id="last-name" type="text" placeholder="Last Name">Last Name</pui-form-input-fancy>
      <pui-form-input-fancy id="dob" type="date">Birthday</pui-form-input-fancy>
      <pui-form-input-fancy id="zipcode" type="tel" placeholder="e.g.90012">ZIP Code</pui-form-input-fancy>
    </pui-form>
    <pui-form action="" class="laptop-up-4 p-2">
      <pui-form-input id="dob" type="date" icon="pi-calendar">Birthday</pui-form-input>
      <pui-form-input 
        id="date" 
        type="date" 
        icon="pi-calendar" 
        iconSide="right">
        Date
      </pui-form-input>
      <pui-form-input 
        id="time" 
        type="time" 
        placeholder="e.g.90012" 
        icon="pi-clock" 
        iconSide="right">
        Your Time
      </pui-form-input>
      <pui-form-button-group>
        <pui-button size="large">Submit</pui-button>
      </pui-form-button-group>
    </pui-form>
    <pui-form action="" class="p-2">
      <pui-form-fieldset header="Choose">
        <pui-form-checkbox id="option-1">This One</pui-form-checkbox>
        <pui-form-checkbox id="option-2">That One</pui-form-checkbox>
        <pui-form-checkbox id="option-3">Or This One</pui-form-checkbox>
        <pui-form-checkbox id="option-4">Or Even That One</pui-form-checkbox>
      </pui-form-fieldset>
    </pui-form>
    <pui-form action="" class="p-2">
      <pui-form-fieldset header="Pick one">
        <pui-form-radio id="radio-1" name="radio">Smaller</pui-form-radio>
        <pui-form-radio id="radio-2" name="radio">Small</pui-form-radio>
        <pui-form-radio id="radio-3" name="radio">Big</pui-form-radio>
        <pui-form-radio id="radio-4" name="radio">Bigger</pui-form-radio>
      </pui-form-fieldset>
    </pui-form>
    <pui-form action="" class="p-2 laptop-up-2">
      <pui-form-select header="Option" name="Option Select" id="Option">
        <pui-form-select-option value="option1">Option 1</pui-form-select-option>
        <pui-form-select-option value="option2">Option 2</pui-form-select-option>
        <pui-form-select-option value="option3">Option 3</pui-form-select-option>
        <pui-form-select-option value="option4">Option 4</pui-form-select-option>
        <pui-form-select-option value="option5">Option 5</pui-form-select-option>
        <pui-form-select-option value="option6">Option 6</pui-form-select-option>
      </pui-form-select>
    </pui-form>
    <pui-form action="" class="p-2 laptop-up-2">
      <pui-form-select name="Select a time" id="task-1-time" time>
        <pui-form-select-option value="8:00 AM">8:00 AM</pui-form-select-option>
        <pui-form-select-option value="8:30 AM">8:30 AM</pui-form-select-option>
        <pui-form-select-option value="9:00 AM">9:00 AM</pui-form-select-option>
        <pui-form-select-option value="9:30 AM">9:30 AM</pui-form-select-option>
        <pui-form-select-option value="10:00 AM">10:00 AM</pui-form-select-option>
        <pui-form-select-option value="10:30 AM">10:30 AM</pui-form-select-option>
      </pui-form-select>
    </pui-form>
    <pui-form action="" class="p-2 laptop-up-3">
      <pui-form-toggle header="Are You">
        <pui-form-toggle-option id="Tall-2" name="height" checked>Tall</pui-form-toggle-option>
        <pui-form-toggle-option id="Short-2" name="height">Short</pui-form-toggle-option>
      </pui-form-toggle>
    </pui-form>
    <pui-form action="" class="p-2 laptop-up-3">
      <pui-form-toggle header="Are You" disabled>
        <pui-form-toggle-option id="Tall-2" name="height" checked>Tall</pui-form-toggle-option>
        <pui-form-toggle-option id="Short-2" name="height">Short</pui-form-toggle-option>
      </pui-form-toggle>
    </pui-form>
    <pui-form action="">
      <pui-form-input id="readonly-1" type="text" value="This is a readonly input. When you select edit, the readonly attribute will be removed." readonly class="block-9 readonly-input"></pui-form-input>
      <pui-button class="ml-2" @click="toggleReadOnly($event)">Edit</pui-button>
      <pui-form-textarea id="readonly-2" readonly value="This is a readonly textarea. When you select edit, the readonly attribute will be removed." class="block-9 readonly-text"></pui-form-textarea>
      <pui-button class="ml-2" @click="toggleReadOnlyText($event)">Edit</pui-button>
    </pui-form>
    <pui-form action="" class="laptop-up-4 p-2">
      <pui-form-input id="first-name" type="text" placeholder="First Name">First Name</pui-form-input>
      <pui-form-input id="last-name" type="text" placeholder="Last Name">Last Name</pui-form-input>
      <pui-form-input id="dob" type="date">Birthday</pui-form-input>
      <pui-form-input id="zipcode" type="tel" placeholder="e.g.90012">ZIP Code</pui-form-input>
      <pui-form-fieldset header="Choose">
        <pui-form-checkbox id="choose-1">This One</pui-form-checkbox>
        <pui-form-checkbox id="choose-2">That One</pui-form-checkbox>
      </pui-form-fieldset>
      <pui-form-fieldset header="Gender">
        <pui-form-radio id="male" name="radio">Male</pui-form-radio>
        <pui-form-radio id="female" name="radio">Female</pui-form-radio>
      </pui-form-fieldset>
      <pui-form-select header="Option" name="Option Select" id="Option">
        <pui-form-select-option value="option1">Option 1</pui-form-select-option>
        <pui-form-select-option value="option2">Option 2</pui-form-select-option>
        <pui-form-select-option value="option3">Option 3</pui-form-select-option>
        <pui-form-select-option value="option4">Option 4</pui-form-select-option>
        <pui-form-select-option value="option5">Option 5</pui-form-select-option>
        <pui-form-select-option value="option6">Option 6</pui-form-select-option>
      </pui-form-select>
      <pui-form-toggle header="Are You">
        <pui-form-toggle-option id="Tall-1" name="height" checked>Tall</pui-form-toggle-option>
        <pui-form-toggle-option id="Short-1" name="height">Short</pui-form-toggle-option>
      </pui-form-toggle>
      <pui-form-input id="date" type="date" icon="pi-calendar">Date</pui-form-input>
      <pui-form-input id="date" type="time">Your Time</pui-form-input>
      <pui-form-button-group>
        <pui-button size="large">Submit</pui-button>
      </pui-form-button-group>
    </pui-form>
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
    buttonClick(){
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
    toggleReadOnly(e) {
      e.preventDefault();
      document.querySelector('.readonly-input label input').removeAttribute('readonly');
    },
    toggleReadOnlyText(e) {
      e.preventDefault();
      document.querySelector('.readonly-text label textarea').removeAttribute('readonly');
    }
  },
};
</script>
