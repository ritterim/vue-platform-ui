<template>
  <img :src="src" class="card__image" />
</template>

<script>
export default {
  name: 'card-image',
  props: {
    src: {
      type: String,
    },
  },
};
</script>