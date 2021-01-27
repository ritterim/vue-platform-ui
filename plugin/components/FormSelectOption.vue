<template>
  <option :value="value" :selected="selected"><slot></slot></option>
</template>

<script>
export default {
  name: 'pui-form-select-option',
  props: {
    value: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean
    }
  }
};
</script>