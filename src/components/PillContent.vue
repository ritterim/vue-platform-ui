<template>
  <div class="pill__content" :class="contentClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'pill-content',
  props: {
    contentClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
  },
};
</script>