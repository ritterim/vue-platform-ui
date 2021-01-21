<template>
  <div
    class="drawer"
    :class="[{ 'drawer--closed': !open }, drawerDirection, drawerSize]"
  >
    <div class="drawer__inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'drawer',
  props: {
    // Sets whether the drawer is open or not
    open: {
      type: Boolean,
    },
    // Set the direction the drawer should appear in the viewport
    direction: {
      type: String,
      validator: function (value) {
        return ['right', 'bottom', 'left'].indexOf(value) !== -1;
      },
    },
    // Set the size of the drawer (only option currently is "single")
    size: {
      type: String,
      validator: function (value) {
        return ['single'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    drawerSize() {
      let className = null;
      if (this.size) {
        switch (this.size) {
          case 'single':
            className = 'drawer--single-row';
            break;
          default:
            className = null;
        }
      }
      return className;
    },
    drawerDirection() {
      let className = null;
      if (this.direction) {
        switch (this.direction) {
          case 'right':
            className = 'drawer-right';
            break;
          case 'bottom':
            className = 'drawer-bottom';
            break;
          case 'left':
            className = 'drawer-left';
            break;
          default:
            className = null;
        }
      }
      return className;
    },
  },
};
</script>