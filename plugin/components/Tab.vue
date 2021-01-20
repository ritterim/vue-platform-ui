<template>
  <input type="radio" :id="index" :name="name" :checked="checked">
  <label :for="index" class="tab">
    {{ header }}
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
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      required: true
    }
  }
};
</script>