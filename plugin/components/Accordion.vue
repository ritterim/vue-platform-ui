<template>
  <div class="accordion" :class="{ active: active }">
    <slot></slot>
  </div>
</template>

<script>
// The Platform UI Accordion is a component that expands when the header is clicked to reveal more content.
export default {
  name: 'accordion',
  props: {
    // Prop to determine if the accordion is active or not
    active: {
      type: Boolean,
    },
  },
};
</script>
