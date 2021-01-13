<template>
  <div
    class="pill pill--circle"
    :class="[
      pillClasses,
      setCircleSize,
      circleEmpty == 'true' ? 'pill--circle-empty' : null,
      statusClass,
    ]"
  >
    <!-- Set the pill--cirlce content, but hidden if circleEmpty is set -->
    <slot v-if="!!circleEmpty"></slot>
  </div>
</template>

<script>
export default {
  name: 'pill-circle',
  props: {
    // Pass in CSS classes to apply to the pill element
    pillClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    // Set whether the element is empty or not (true applies pill--circle-empty class)
    circleEmpty: {
      type: String,
      validator: function (value) {
        return value === 'true';
      },
    },
    // Set the size of the circle
    circleSize: {
      type: String,
      validator: function (value) {
        return ['medium', 'large'].indexOf(value) !== -1;
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
  computed: {
    setCircleSize() {
      let sizeClass = null;

      if (this.circleSize) {
        switch (this.circleSize) {
          case 'medium':
            sizeClass = 'pill--circle-medium';
            break;
          case 'large':
            sizeClass = 'pill--circle-large';
            break;
          default:
            sizeClass = null;
        }
      }

      return sizeClass;
    },
  },
};
</script>
