<template>
  <div class="block form__field form__field--fancy">
    <input :id="id" :type="type" required :placeholder="placeholder" :pattern="pattern">
    <label :for="id">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'pui-form-input-fancy',
  props: {
    id: {
      type: String
    },
    type: {
      type: String
    },
    placeholder: {
      type: String
    },
    pattern: {
      type: String
    }
  }
};
</script>