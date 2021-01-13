<template>
  <div :class="computedType" :data-tooltip="message">
    <!-- Default - Set Tool Tip target content -->
    <slot>Tooltip Target</slot>
  </div>
</template>

<script>
export default {
  name: 'tool-tip',
  props: {
    // Set the direction the Tool Tip should appear
    direction: {
      type: String,
      default: 'top',
      required: true,
      validator: function (value) {
        return ['top', 'right', 'bottom', 'left'].indexOf(value) !== -1;
      },
    },
    // Set the Tool Tip message
    message: {
      type: String,
      required: true,
      default: 'Tooltip Message',
      validator: function (value) {
        return typeof value === 'string';
      },
    },
  },
  computed: {
    computedType() {
      let className = 'tooltip-top';

      switch (this.direction) {
        case 'top':
          className = 'tooltip-top';
          break;
        case 'right':
          className = 'tooltip-right';
          break;
        case 'bottom':
          className = 'tooltip-bottom';
          break;
        case 'left':
          className = 'tooltip-left';
          break;
        default:
          className = 'tooltip-top';
      }

      return className;
    },
  },
};
</script>