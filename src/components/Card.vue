<template>
  <div class="card" :class="cardClasses">
    <div v-if="header" class="card__header" :class="headerClasses">
      {{ header }}
    </div>
    <!-- Display if the group slot is utilized -->
    <div v-if="checkForGroup" class="card__group" :class="groupClasses">
      <!-- Adds items to the card__group -->
      <slot name="group"></slot>
    </div>
    <div class="card__content" :class="contentClasses">
      <!-- Sets the Card content -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    // Sets the Card header
    header: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    // Pass in CSS classes to apply to the card element
    cardClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    // Pass in CSS classes to apply to the card__header element
    headerClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    // Pass in CSS classes to apply to the card__group element
    groupClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    // Pass in CSS classes to apply to the card__content element
    contentClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    }
  },
  computed: {
    // Check to see if there is a group slot present
    checkForGroup() {
      // Return true if there is a group slot present
      return !!this.$slots.group;
    },
  },
};
</script>