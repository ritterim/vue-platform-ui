<template>
  <div class="dropdown" :class="open">
    <div class="site-menu__item dropdown__trigger" @click.prevent="toggleDropdown">
      {{ header }}
      <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
    </div>
    <div class="dropdown__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pui-menu-dropdown',
  props: {
    header: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    }
  },
  data() {
    return {
      open: null,
    };
  },
  methods: {
    toggleDropdown() {
      if (this.open === null) {
        this.open = 'dropdown-active';
      } else {
        this.open = null;
      }
    },
  },
};
</script>