<template>
  <div class="card">
    <div class="card__content">
      <div v-if="header" class="card__header">
        {{ header }}
      </div>

      <!-- Display if the group slot is utilized -->
      <div v-if="checkForGroup" class="card__group">
        <slot name="group"></slot>
      </div>

      <slot>Card Content</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    header: {
      type: String,
      default: null,
      validator: function (value) {
        return typeof value === 'string';
      }
    }
  },
  computed:{
    checkForGroup(){
      // Return true if there is a group slot present
      return !!this.$slots.group
    }
  }
};
</script>