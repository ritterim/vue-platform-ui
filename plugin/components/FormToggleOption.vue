<template>
  <input :id="id" type="radio" :name="name" :checked="checked">
  <label :for="id">
    <i class="pi-check pi-heavy"></i><slot></slot>
  </label>
</template>

<script>
export default {
  name: 'pui-form-toggle-option',
  props: {
    name: {
      type: String
    },
    id: {
      type: String
    },
    checked: {
      type: Boolean
    }
  }
};
</script>