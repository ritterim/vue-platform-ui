<template>
  <i :class="[icon, iconClasses, iconSize]"></i>
</template>

<script>
export default {
  name: 'icon',
  props: {
    // Pass in which icon to use by icon class name
    icon: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    // Pass in CSS classes to apply to the icon element
    iconClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    // Set the size of the icon
    size:{
      type: String,
      validator: function (value) {
        return ['small', 'large', 'extra-large', 'double-extra-large'].indexOf(value) !== -1;
      },
    }
  },
  computed: {
    iconSize() {
      let className = null;

      if (this.size) {
        switch (this.size) {
          case 'small':
            className = 'pi-sm';
            break;
          case 'large':
            className = 'pi-lg';
            break;
          case 'extra-large':
            className = 'pi-xl';
            break;
          case 'double-extra-large':
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