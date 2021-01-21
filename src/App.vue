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
        <h2>Button</h2>
        <pui-button>My Button</pui-button>
        <pui-button size="large">My Large Button</pui-button>
      </div>
    </div>

    <!-- Cards -->
    <div class="block-container m-2">
      <div class="block laptop-up-3">
        <h2>Cards</h2>
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
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      accordionOpen: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.accordionOpen = !this.accordionOpen;
    },
  },
};
</script>
