<template>
  <button class="button" :class="buttonSize">
    <slot>Button Label</slot>
  </button>
</template>

<script>
export default {
  name: 'pui-button',
  props: {
    // Sets the size of the button
    size: {
      type: String,
      validator: function (value) {
        return ['lg'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    buttonSize() {
      let className = null;
      if (this.size) {
        switch (this.size) {
          case 'lg':
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