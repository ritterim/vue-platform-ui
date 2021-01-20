<template>
  <blockquote :class="blockquoteClasses" :cite="citeURL">
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
    blockquoteClasses: {
      type: String
    },
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