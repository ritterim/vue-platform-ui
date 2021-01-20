<template>
  <div class="button" :class="[buttonSize, buttonClasses]">
    <slot>Button Label</slot>
  </div>
</template>

<script>
export default {
  name: 'button',
  props: {
    // Pass in CSS classes to apply to the button element
    buttonClasses: {
      type: String,
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