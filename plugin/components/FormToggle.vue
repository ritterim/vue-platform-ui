<template>
  <div class="block">
    <fieldset class="form__field" :disabled="disabled">
      <legend v-if="header">
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
    }
  }
};
</script>