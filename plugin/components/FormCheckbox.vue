<template>
  <div class="block">
    <fieldset class="form__field" :class="{error: error}">
      <legend>
        {{ header }}
      </legend>
      <div class="form__option-group">
        <slot></slot>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'pui-form-checkbox',
  props: {
    header: {
      type: String
    },
    error: {
      type: Boolean
    }
  }
};
</script>