<template>
  <div class="accordion" :class="{ active: accordionOpen }">
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
      <slot>Accordion Content</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'accordion',
  props: {
    header: {
      type: String,
      default: 'Accordion Header',
      required: true,
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
