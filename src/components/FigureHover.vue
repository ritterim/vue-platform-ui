<template>
  <figure class="figure-hover">
    <img :src="src" :alt="caption" />
    <figcaption>{{caption}}</figcaption>
  </figure>
</template>

<script>
export default {
  name:'figure-hover',
  props:{
    src:{
      type: String,
      required: true,
      validator: function (value) {
        return typeof value === 'string';
      }
    },
    caption:{
      type: String,
      required: true,
      validator: function (value) {
        return typeof value === 'string';
      }
    }
  }
}
</script>