<template>
  <div class="accordion" :class="{ active: accordionOpen }">
    <a
      href="#"
      @click.prevent="toggleAccordion"
      class="accordion__header px-3 py-3 flex--justify-between flex--align-center">
      <div class="flex flex--align-center">
        {{ header }}
      </div>
      <i class="pi-angle-down accordion__icon text-med-blue"></i>
    </a>
    <div
      class="accordion__content px-3 py-3"
      :class="{ active: accordionOpen }">
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
