<template>
  <div class="loader" :class="loaderSize"></div>
</template>

<script>
export default {
  name: 'loader',
  props: {
    // Sets the size of the loader
    size: {
      type: String,
      validator: function (value) {
        return ['sm', 'lg'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    loaderSize() {
      let className = null;
      if (this.size) {
        switch (this.size) {
          case 'sm':
            className = 'loader--sm';
            break;
          case 'lg':
            className = 'loader--lg';
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