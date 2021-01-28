<template>
  <input 
    :id="id"
    :name="name"
    :checked="checked"
    type="radio"
  >
  <label :for="id">
    <i class="pi-check pi-heavy"></i><slot></slot>
  </label>
</template>

<script>
export default {
  name: 'pui-form-toggle-option',
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean
    }
  }
};
</script>