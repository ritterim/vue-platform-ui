<template>
  <div class="block form__field form__field--fancy">
    <input 
      :id="id" 
      :type="type"  
      :placeholder="placeholder" 
      :pattern="pattern"
      required>
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
      type: String,
      required: true
    },
    type: {
      type: String,
      validator: function (value) {
        return ['text', 'search', 'date', 'email', 'textarea', 'tel', 'password', 'number', 'time', 'url', 'datetime-local', 'month', 'week'].indexOf(value) !== -1;
      },
      default: 'text'
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