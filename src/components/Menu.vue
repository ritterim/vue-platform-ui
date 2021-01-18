<template>
  <header class="site-menu-wrapper">
    <button class="site-menu-mobile-action" @click.prevent="toggleMobileMenu">
      <span class="sr-only">Toggle Navigation</span>
      <i aria-hidden="true" focusable="false" class="pi-menu pi-xl"></i>
    </button>
    <nav class="site-menu" :class="[menuClasses, addStyle, open]">
      <slot></slot>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'pui-menu',
  props: {
    menuClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    menuStyle: {
      type: String,
      validator: function (value) {
        return ['bordered', 'underlined'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    addStyle() {
      let className = null;

      if (this.menuStyle) {
        switch (this.menuStyle) {
          case 'bordered':
            className = 'site-menu--bordered';
            break;
          case 'underlined':
            className = 'hover-underline';
            break;
          default:
            className = null;
        }
      }

      return className;
    }
  },
  data() {
    return {
      open: null,
    };
  },
  methods: {
    toggleMobileMenu() {
      if (this.open === null) {
        this.open = 'active';
      } else {
        this.open = null;
      }
    },
  },
};
</script>