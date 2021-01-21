<template>
  <blockquote class="" :cite="citeURL">
    <p>
      <slot></slot>
    </p>
    <footer v-if="author">
      —{{ author }}<cite v-if="cite">, {{ cite }}</cite>
    </footer>
  </blockquote>
</template>

<script>
export default {
  name: 'pui-blockquote',
  props: {
    author: {
      type: String
    },
    cite: {
      type: String
    },
    citeURL: {
      type: String
    }
  }
};
</script>