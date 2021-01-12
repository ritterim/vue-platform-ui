<template>
  <div 
    class="pill__label" 
    :class="labelClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'pill-label',
  props: {
    labelClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
  },
};
</script>