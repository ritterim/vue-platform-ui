<template>
  <div class="block">
    <fieldset class="form__field" :disabled="disabled">
      <legend>
        {{ header }}
      </legend>
      <div class="toggle">
        <slot></slot>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'pui-form-toggle',
  props: {
    header: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    name: {
      type: String
    },
    firstOption: {
      type: String
    },
    secondOption: {
      type: String
    }
  }
};
</script>