<template>
  <input 
    :class="{error: error}" 
    :id="id" 
    :checked="checked"
    type="checkbox" 
  >
  <label :for="id">
    <div class="input-icons">
      <i class="pi-circle pi-lg"></i>
      <i class="pi-check pi-heavy"></i>
    </div><slot></slot>
  </label>
</template>

<script>
export default {
  name: 'pui-form-checkbox',
  props: {
    id: {
      type: String,
      required: true
    },
    error: {
      type: Boolean
    },
    checked: {
      type: Boolean
    }
  }
};
</script>