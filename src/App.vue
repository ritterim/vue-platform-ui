<template>
  <div class="block-container m-3">
    <div class="block block-3">
      <pui-card>
        <template v-slot:header>
          <div class="card__group">
            <i class="pi-quill"></i>
            <div class="card__title">Card Header</div>
          </div>
          <pui-button></pui-button>
        </template>
        <template v-slot:content>
          <p>Content</p>
        </template>
      </pui-card>
    </div>
    <div class="block block-12 mt-3">
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
    <div class="block mt-3">
      <pui-blockquote>
        Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.
      </pui-blockquote>
      <pui-blockquote blockquoteClasses="border--color-orange">
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
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
