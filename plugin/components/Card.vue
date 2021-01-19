<template>
  <div class="card">
    <div class="card__header">
      <slot name="header">
      </slot>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>
