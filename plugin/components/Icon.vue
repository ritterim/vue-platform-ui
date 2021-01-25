<template>
  <i :class="[icon, iconSize]"></i>
</template>

<script>
export default {
  name: 'icon',
  props: {
    // Set the icon by passing in the icon class
    icon: {
      type: String,
      required: true,
    },
    // Set the size of the icon (sm, lg, xl, xxl)
    size: {
      type: String,
      validator: function (value) {
        return (
          ['sm', 'lg', 'xl', 'xxl'].indexOf(
            value
          ) !== -1
        );
      },
    },
  },
  computed: {
    iconSize() {
      let className = null;
      if (this.size) {
        switch (this.size) {
          case 'sm':
            className = 'pi-sm';
            break;
          case 'lg':
            className = 'pi-lg';
            break;
          case 'xl':
            className = 'pi-xl';
            break;
          case 'xxl':
            className = 'pi-xxl';
            break;
          default:
            className = null;
        }
      }
      return className;
    },
  },
};
</script>