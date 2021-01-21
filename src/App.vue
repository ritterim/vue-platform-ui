<template>
  <div class="block-container m-2">
    <div class="block laptop-up-3">
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
        <pui-card-header>This is the header</pui-card-header>
        <pui-card-content>This is the content</pui-card-content>
        <pui-card-footer>This is the footer</pui-card-footer>
      </pui-card>
    </div>
  </div>

  <div class="block-container m-2">
    <div class="block laptop-up-3">
      <pui-card>
        <pui-card-image
          src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        ></pui-card-image>
        <pui-card-header>
          <pui-card-group>
            <i class="pi-quill"></i>
            <pui-card-title>This is the header!</pui-card-title>
          </pui-card-group>
          <pui-button>My Button</pui-button>
        </pui-card-header>
        <pui-card-content scroll="true">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            expedita delectus officia culpa labore nostrum suscipit asperiores
            laborum, qui maiores! Id cumque blanditiis, ducimus et obcaecati
            veritatis atque repellat quia.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            expedita delectus officia culpa labore nostrum suscipit asperiores
            laborum, qui maiores! Id cumque blanditiis, ducimus et obcaecati
            veritatis atque repellat quia.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            expedita delectus officia culpa labore nostrum suscipit asperiores
            laborum, qui maiores! Id cumque blanditiis, ducimus et obcaecati
            veritatis atque repellat quia.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            expedita delectus officia culpa labore nostrum suscipit asperiores
            laborum, qui maiores! Id cumque blanditiis, ducimus et obcaecati
            veritatis atque repellat quia.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            expedita delectus officia culpa labore nostrum suscipit asperiores
            laborum, qui maiores! Id cumque blanditiis, ducimus et obcaecati
            veritatis atque repellat quia.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            expedita delectus officia culpa labore nostrum suscipit asperiores
            laborum, qui maiores! Id cumque blanditiis, ducimus et obcaecati
            veritatis atque repellat quia.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            expedita delectus officia culpa labore nostrum suscipit asperiores
            laborum, qui maiores! Id cumque blanditiis, ducimus et obcaecati
            veritatis atque repellat quia.
          </p>
        </pui-card-content>
        <pui-card-footer>This is the footer</pui-card-footer>
      </pui-card>
    </div>
  </div>

  <div class="block-container m-2">
    <div class="block laptop-up-4">
      <pui-figure-hover
        src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        caption="This is my caption!"
      ></pui-figure-hover>
    </div>
  </div>
  <!-- 
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
      </pui-menu> -->
</template>

<script>
export default {
  name: 'App',
};
</script>
