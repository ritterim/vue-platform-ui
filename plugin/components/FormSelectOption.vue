<template>
  <option :value="value"><slot></slot></option>
</template>

<script>
export default {
  name: 'pui-form-select-option',
  props: {
    value: {
      type: String
    }
  }
};
</script>