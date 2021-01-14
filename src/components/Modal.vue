<template>
  <div
    class="modal"
    :class="[
      modalClasses,
      modalSize,
      centered === 'true' ? 'modal--centered' : null,
    ]"
  >
    <div class="modal__inner">
      <div v-if="headerPresent" class="modal__header" :classes="headerClasses">
        <slot name="header"></slot>
      </div>
      <div class="modal__content" :classes="contentClasses">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    // Pass in CSS classes to apply to the modal element
    modalClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    // Pass in CSS classes to apply to the modal__content element
    contentClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    // Pass in CSS classes to apply to the modal__header element
    headerClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    // Set the size of the modal
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'large', 'full'].indexOf(value) !== -1;
      },
    },
    // Set whether the modal is centered within the viewport
    centered: {
      type: String,
      validator: function (value) {
        return value === 'true';
      },
    },
    // Set whether the modal is open
    // open: {
    //   type: String,
    //   validator: function (value) {
    //     return ['true', 'false'].indexOf(value) !== -1;
    //   },
    // },
  },
  computed: {
    headerPresent() {
      return !!this.$slots.header;
    },
    modalSize() {
      let className = null;

      if (this.size) {
        switch (this.size) {
          case 'small':
            className = 'modal--small';
            break;
          case 'large':
            className = 'modal--large';
            break;
          case 'full':
            className = 'modal--full';
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