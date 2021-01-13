<template>
  <div
    class="modal"
    :class="[
      modalClasses,
      modalSize,
      centered === 'true' ? 'modal--centered' : null,
      open !== 'true' ? 'modal--closed' : null,
    ]"
  >
    <div class="modal__inner">
      <div class="modal__header" :class="headerClasses">
        <button
          @click="closeModal"
          class="button modal__close"
          data-modal="default-modal"
        >
          Close
          <i class="pi-times"></i>
        </button>
        {{ header }}
      </div>
      <div class="modal__content" :class="contentClasses">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    modalClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    header: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    headerClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    contentClasses: {
      type: String,
      validator: function (value) {
        return typeof value === 'string';
      },
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'large', 'full'].indexOf(value) !== -1;
      },
    },
    centered: {
      type: String,
      validator: function (value) {
        return value === 'true';
      },
    },
    open: {
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