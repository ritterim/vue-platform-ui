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
      <pui-tabs class="tabs--flat">
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
      <pui-tabs class="tabs--flat unresponsive">
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
</template>

<script>
export default {
  name: 'App'
}
</script>
