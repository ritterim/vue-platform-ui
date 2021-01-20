<template>
  <div 
    class="accordion__header"
    :aria-expanded="active"
    role="button"
    tabindex="0">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'accordion-header',
    props:{
      active:{
        type: Boolean
      }
    }
  }
</script>