<template>
  <div class="drawer" :class="[drawerDirection, drawerSize, drawerClasses]">
    <div class="drawer__inner">
      <div class="drawer__header" :class="headerClasses">
        <button class="button drawer__close" data-drawer="default">
          Close
          <i class="pi-times" aria-hidden="true"></i>
        </button>
        {{ header }}
      </div>
      <div class="drawer__content" :class="contentClasses">
        <!-- Sets the drawer content -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'drawer',
  props: {
    // Pass in CSS classes to apply to the drawer element
    drawerClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    // Set the drawer__header content
    header: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    // Pass in CSS classes to apply to the drawer__header element
    headerClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    // Pass in CSS to apply to the drawer__content element
    contentClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    // Set the size of the drawer (only option currently is "single")
    size: {
      type: String,
      validator: function (value) {
        return ['single'].indexOf(value) !== -1;
      },
    },
    // Set the direction the drawer should appear in the viewport
    direction: {
      type: String,
      validator: function (value) {
        return ['right', 'bottom', 'left'].indexOf(value) !== -1;
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