<template>
  <form :action="action" class="form block-container blocks" :class="[{'form--bordered': bordered}, {'form--rounded': rounded}]">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'pui-form',
  props: {
    bordered: {
      type: Boolean
    },
    rounded: {
      type: Boolean
    },
    action: {
      type: String,
      required: true
    }
  }
};
</script>