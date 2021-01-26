<template>
  <div class="block">
    <label :for="id" class="form__field">{{ header }}
      <div class="form__select-wrapper">
        <select :name="name" :id="id">
          <slot></slot>
        </select>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'pui-form-select',
  props: {
    header: {
      type: String
    },
    name: {
      type: String
    },
    id: {
      type: String
    }
  }
};
</script>