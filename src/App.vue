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
      <pui-accordion
        header="Click here to see more information!"
        header-classes="px-3 py-3 flex--justify-between flex--align-center"
        content-classes="px-3 py-3">
        This is the accordion content!
      </pui-accordion>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
