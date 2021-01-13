<template>
  <div :class="imageSize">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  name: 'image-round',
  props: {
    // Set the size of the round image
    size: {
      type: String,
      default: 'image--round-medium',
      required: true,
      validator: function (value) {
        return ['small', 'large', 'extra-large', 'double-extra-large'].indexOf(value) !== -1;
      },
    },
    // Set the img src attribute
    src: {
      type: String,
      required: true,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    // Set the img alt attribute
    alt: {
      type: String,
      required: true,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
  },
  computed: {
    imageSize() {
      let className = 'image--round-medium';

      if (this.size) {
        switch (this.size) {
          case 'small':
            className = 'image--round-small';
            break;
          case 'medium':
            className = 'image--round-medium';
            break;
          case 'large':
            className = 'image--round-large';
            break;
          default:
            className = 'image--round-medium';
        }
      }

      return className;
    },
  },
};
</script>