<template>
  <figure class="figure-hover">
    <img :src="src" :alt="caption" />
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>

<script>
export default {
  name: 'figure-hover',
  props: {
    // Set the image src
    src: {
      type: String,
      required: true,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    // Set the figure caption
    caption: {
      type: String,
      required: true,
      validator: function (value) {
        return typeof value === 'string';
      },
    }
  },
};
</script>