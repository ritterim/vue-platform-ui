<template>
  <div 
    class="accordion" 
    :class="{ active: active }">
    <slot></slot>
  </div>
</template>

<script>
// The Platform UI Accordion is a component that expands when the header is clicked to reveal more content.
export default {
  name: 'accordion',
  props: {
    active:{
      type:Boolean
    }
  }
};
</script>
