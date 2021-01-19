<template>
  <div class="block-container m-3">
    <div class="block block-3">
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
</template>

<script>
export default {
  name: 'App'
}
</script>
