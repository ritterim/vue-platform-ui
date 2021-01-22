<template>
  <div class="tabs" :class="[{'tabs--flat': flat}, {unresponsive: unresponsive}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'pui-tabs',
  props: {
    flat: {
      type: Boolean
    },
    unresponsive: {
      type: Boolean
    }
  }
};
</script>