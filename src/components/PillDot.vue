<template>
  <div
    class="pill pill--circle-empty-dot"
    :class="[pillClasses, statusClass]"
  ></div>
</template>

<script>
export default {
  name: 'pill-dot',
  props: {
    // Pass in CSS classes to apply to the pill element
    pillClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    // Set either the negative or positive
    statusClass: {
      type: String,
      validator: function (value) {
        return ['negative', 'positive'].indexOf(value) !== -1;
      },
    },
  },
};
</script>