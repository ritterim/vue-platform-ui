<template>
  <div class="block">
    <fieldset class="form__field" :class="{error: error}">
      <legend v-if="header">
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
  name: 'pui-form-fieldset',
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