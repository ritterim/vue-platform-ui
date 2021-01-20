<template>

  <!-- Card -->
  <div class="block-container m-3">
    <div class="block block-3">
      <h2>Card</h2>
      <pui-card>
        <template v-slot:header>
          <div class="card__group">
            <i class="pi-quill"></i>
            <div class="card__title">Card Header</div>
          </div>
          <pui-button></pui-button>
        </template>
        <template v-slot:content>
          <p>Content</p>
        </template>
      </pui-card>
    </div>
  </div>

  <!-- Accordion -->
  <div class="block-container m-3">
    <div class="block laptop-up-6">
      <h2>Accordion</h2>

      <pui-accordion :active="accordionOpen">
        <pui-accordion-header 
          class="px-3 py-3 flex--justify-between flex--align-center text-med-blue"
          :active="accordionOpen"
          @click="toggleAccordion"
          v-on:keyup.enter="toggleAccordion"
          v-on:keyup.space="toggleAccordion">
          Hello, World!
          <i class="pi-angle-down accordion__icon" aria-hidden="true"></i>
        </pui-accordion-header>
        <pui-accordion-content  
          :active="accordionOpen" 
          class="px-3 py-3">
          This is my accordion content!
        </pui-accordion-content>
      </pui-accordion>

    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      accordionOpen: false
    }
  },
  methods: {
    toggleAccordion() {
      this.accordionOpen = !this.accordionOpen;
    }
  },
};
</script>
