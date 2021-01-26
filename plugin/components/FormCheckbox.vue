<template>
  <input :class="{error: error}" :id="id" type="checkbox">
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
      type: String
    },
    error: {
      type: Boolean
    }
  }
};
</script>