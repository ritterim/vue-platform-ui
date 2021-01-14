<template>
  <div class="button" :class="[buttonSize, buttonClasses]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'platform-button',
  props: {
    // Pass in CSS classes to apply to the button element
    buttonClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    // Sets the size of the button
    size: {
      type: String,
      validator: function (value) {
        return ['large'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    buttonSize() {
      let className = null;

      if (this.size) {
        switch (this.size) {
          case 'large':
            className = 'button--lg';
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