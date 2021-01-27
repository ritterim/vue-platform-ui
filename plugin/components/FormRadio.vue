<template>
  <input 
    :class="{error: error}" 
    :id="id" 
    :name="name"
    type="radio">
  <label :for="id">
    <div class="input-icons">
      <i class="pi-circle pi-lg"></i>
      <i class="pi-circle-solid"></i>
    </div><slot></slot>
  </label>
</template>

<script>
export default {
  name: 'pui-form-radio',
  props: {
    id: {
      type: String,
      required: true
    },
    error: {
      type: Boolean
    },
    name: {
      type: String,
      required: true
    }
  }
};
</script>