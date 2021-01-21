<template>
  <div
    class="accordion__header"
    :aria-expanded="active"
    role="button"
    tabindex="0"
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