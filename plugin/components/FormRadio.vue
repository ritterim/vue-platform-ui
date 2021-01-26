<template>
  <input class="form__checkbox" :class="{error: error}" :id="id" type="radio" :name="name">
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
      type: String
    },
    error: {
      type: Boolean
    },
    name: {
      type: String
    }
  }
};
</script>