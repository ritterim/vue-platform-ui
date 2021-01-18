<template>
  <nav class="site-menu" :class="[menuClasses, addStyle]">
    <slot></slot>
  </nav>
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
        return ['bordered', 'underlined', 'bordered underlined', 'underlined bordered'].indexOf(value) !== -1;
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
          case 'bordered underlined':
          case 'underlined bordered':
            className = 'site-menu--bordered hover-underline';
            break;
          default:
            className = null;
        }
      }

      return className;
    }
  }
};
</script>