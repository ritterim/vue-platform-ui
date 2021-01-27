<template>
  <div class="block">
    <label :for="id" class="form__field" :class="{error: error}"><slot></slot>
      <textarea 
        :id="id" 
        :name="id" 
        :class="{readonly: readonly}" 
        :readonly="readonly" 
        :placeholder="placeholder" 
        :value="value"></textarea>
    </label>
  </div>
</template>

<script>
export default {
  name: 'pui-form-textarea',
  props: {
    id: {
      type: String,
      required: true
    },
    placeholder: {
      type: String
    },
    error: {
      type: Boolean
    },
    readonly: {
      type: Boolean
    },
    value: {
      type: String
    }
  }
};
</script>