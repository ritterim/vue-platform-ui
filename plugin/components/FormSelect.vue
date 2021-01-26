<template>
  <div class="block">
    <label :for="id" class="form__field">{{ header }}
      <div class="form__select-wrapper" :class="{time: time}">
        <select :name="name" :id="id">
          <slot></slot>
        </select>
        <i v-if="time" class="pi-clock"></i>
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
    },
    time: {
      type: Boolean
    }
  }
};
</script>