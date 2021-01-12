<template>
  <div class="card" :class="cardClasses">
    <div v-if="header" class="card__header" :class="headerClasses">
      {{ header }}
    </div>
    <!-- Display if the group slot is utilized -->
    <div v-if="checkForGroup" class="card__group" :class="groupClasses">
      <slot name="group"></slot>
    </div>
    <div class="card__content" :class="contentClasses">
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
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    cardClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    headerClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    groupClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    contentClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    }
  },
  computed: {
    checkForGroup() {
      // Return true if there is a group slot present
      return !!this.$slots.group;
    },
  },
};
</script>