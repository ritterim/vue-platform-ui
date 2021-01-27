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
        return (
          ['sm', 'md', 'lg' ].indexOf(
            value
          ) !== -1
        );
      },
    },
    // Set the img src attribute
    src: {
      type: String,
      required: true,
    },
    // Set the img alt attribute
    alt: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageSize() {
      let className = 'image--round-medium';
      if (this.size) {
        switch (this.size) {
          case 'sm':
            className = 'image--round-small';
            break;
          case 'md':
            className = 'image--round-medium';
            break;
          case 'lg':
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
