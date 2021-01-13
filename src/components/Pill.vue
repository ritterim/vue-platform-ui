<template>
  <div
    class="pill"
    :class="[
      pillClasses,
      (split == 'true') ? 'pill--split' : null ,
      statusClass,
    ]"
  >
    <!-- Set the pill content -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'pill',
  props: {
    // Pass in CSS classes to apply to the pill element
    pillClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    // Set whether the pill is split or not (true applies pill--split class)
    split: {
      type: String,
      validator: function (value) {
        return value === 'true';
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