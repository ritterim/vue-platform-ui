<template>
  <div
    class="accordion__content"
    :class="{ active: active }"
    :aria-hidden="!active"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'accordion-header',
  props: {
    // Prop to determine if the accordion is active or not
    active: {
      type: Boolean,
    },
  },
};
</script>
