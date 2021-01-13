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
      <div class="modal__header" :class="headerClasses">
        <button
          class="button modal__close"
          data-modal="default-modal"
        >
          Close
          <i class="pi-times"></i>
        </button>
        {{ header }}
      </div>
      <div class="modal__content" :class="contentClasses">
        <!-- Pass in the modal content -->
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
    // Set the modal__header content
    header: {
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
    // Pass in CSS classes to apply to the modal__content element
    contentClasses: {
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
  },
  computed: {
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