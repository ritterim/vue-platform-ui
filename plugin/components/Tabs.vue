<template>
  <div class="tabs" :class="tabsClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'pui-tabs',
  props: {
    tabsClasses: {
      type: String
    }
  }
};
</script>