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
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
