<template>
  <div class="card__content" :class="{ 'card__content--scroll': scroll }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'card-content',
  props: {
    // Sets a height on card content and overflow-y:auto
    scroll: {
      type: Boolean,
    },
  },
};
</script>