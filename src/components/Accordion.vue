<template>
  <div class="accordion" :class="[{ active: accordionOpen }, accordionClasses]">
    <a
      href="#"
      @click.prevent="toggleAccordion"
      class="accordion__header"
      :class="headerClasses">
      <div class="flex flex--align-center">
        {{ header }}
      </div>
      <i class="pi-angle-down accordion__icon text-med-blue"></i>
    </a>
    <div
      class="accordion__content"
      :class="[{ active: accordionOpen }, contentClasses]">
      <!-- Sets the Accordion Content -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'accordion',
  props: {
    // Sets the accordion header
    header: {
      type: String,
      default: 'Accordion Header',
      required: true,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    // Pass in CSS classes to apply to the accordion element
    accordionClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    // Pass in CSS classes to apply to the accordion__header element
    headerClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    // Pass in CSS classes to apply to the accordion__content element
    contentClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
  },
  data() {
    return {
      accordionOpen: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.accordionOpen = !this.accordionOpen;
    }
  }
};
</script>
