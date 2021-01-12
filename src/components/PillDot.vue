<template>
  <div class="pill pill--circle-empty-dot" :class="[pillClasses, statusClass]"></div>
</template>

<script>
export default {
  name: 'pill-circle',
  props: {
    pillClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    statusClass: {
      type: String,
      validator: function (value) {
        return ['negative', 'positive'].indexOf(value) !== -1;
      },
    },
  },
};
</script>