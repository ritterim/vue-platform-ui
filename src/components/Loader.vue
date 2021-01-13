<template>
  <div class="loader" :class="loaderSize"></div>
</template>

<script>
export default {
  name: 'loader',
  props: {
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'large'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    loaderSize() {
      let className = null;

      if (this.size) {
        switch (this.size) {
          case 'small':
            className = 'loader--sm';
            break;
          case 'large':
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