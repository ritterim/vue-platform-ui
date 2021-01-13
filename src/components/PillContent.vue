<template>
  <div class="pill__content" :class="contentClasses">
    <!-- Set the pill__content content -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'pill-content',
  props: {
    // Pass in CSS classes to apply to the pill__content element
    contentClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
  },
};
</script>