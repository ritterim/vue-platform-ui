<template>
  <div class="accordion" :class="[{ active: accordionOpen }, accordionClasses]">
    <div
      @click="toggleAccordion"
      v-on:keyup.enter="toggleAccordion"
      v-on:keyup.space="toggleAccordion"
      class="accordion__header"
      :class="headerClasses"
      :aria-expanded="accordionOpen"
      role="button"
      tabindex="0">
      <div class="flex flex--align-center">
        {{ header }}
      </div>
      <i 
        class="pi-angle-down accordion__icon text-med-blue" 
        aria-hidden="true">
      </i>
    </div>
    <div
      class="accordion__content"
      :class="[{ active: accordionOpen }, contentClasses]"
      aria-role="region"
      :aria-hidden="!accordionOpen">
      <!-- Sets the Accordion Content -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
// The Platform UI Accordion is a component that expands when the header is clicked to reveal more content.
export default {
  name: 'accordion',
  props: {
    // Sets the accordion header
    header: {
      type: String,
      default: 'Accordion Header',
      required: true,
    },
    // Pass in CSS classes to apply to the accordion element
    accordionClasses: {
      type: String,
    },
    // Pass in CSS classes to apply to the accordion__header element
    headerClasses: {
      type: String,
    },
    // Pass in CSS classes to apply to the accordion__content element
    contentClasses: {
      type: String,
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
    },
  },
};
</script>
