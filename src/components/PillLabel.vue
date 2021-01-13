<template>
  <div 
    class="pill__label" 
    :class="labelClasses">
    <!-- Set the pill__label content -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'pill-label',
  props: {
    // Pass in CSS classes to apply to the pill__label element
    labelClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
  },
};
</script>