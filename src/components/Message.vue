<template>
  <div 
    class="message" 
    :class="computedType" 
    :data-header="header">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'message',
  props: {
    type: {
      type: String,
      default: 'information',
      required: false,
      validator: function (value) {
        return ['error', 'information', 'success', 'warning'].indexOf(value) !== -1
      },
    },
    header: {
      type: String,
      required: false,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
  },
  computed: {
    computedType() {
      let className = 'message--info';

      switch (this.type) {
        case 'information':
          className = 'message--info';
          break;
        case 'success':
          className = 'message--success';
          break;
        case 'error':
          className = 'message--error';
          break;
        case 'warning':
          className = 'message--warning';
          break;
        default:
          className = 'message--info';
      }
      
      return className;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>