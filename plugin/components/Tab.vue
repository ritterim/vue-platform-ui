<template>
  <input type="radio" :id="index" :name="name" :checked="checked">
  <label :for="index" class="tab">
    <i v-if="icon" class="mr-1" :class="icon" focusable="false" aria-hidden="hidden"></i>{{ header }}
  </label>
  <div class="tab-panel">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'pui-tab',
  props: {
    header: {
      type: String,
      required: true
    },
    index: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean
    },
    icon: {
      type: String
    }
  }
};
</script>