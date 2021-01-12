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
    <slot v-if="!!circleEmpty"></slot>
  </div>
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
    circleEmpty: {
      type: String,
      validator: function (value) {
        return value === 'true';
      },
    },
    circleSize: {
      type: String,
      validator: function (value) {
        return ['medium', 'large'].indexOf(value) !== -1;
      },
    },
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
