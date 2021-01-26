<template>
  <div class="block">
    <label :for="id" class="form__field" :class="[{error: error}, iconSideClass]"><slot></slot>
      <input :id="id" :type="type" :placeholder="placeholder" :pattern="pattern" :class="{readonly: readonly}" :readonly="readonly" :value="value">
      <i v-if="icon" :class="icon"></i>
    </label>
  </div>
</template>

<script>
export default {
  name: 'pui-form-input',
  props: {
    id: {
      type: String
    },
    type: {
      type: String
    },
    placeholder: {
      type: String
    },
    pattern: {
      type: String
    },
    error: {
      type: Boolean
    },
    icon: {
      type: String
    },
    iconSide: {
      type: String,
      validator: function (value) {
        return ['left', 'right'].indexOf(value) !== -1;
      }
    },
    readonly: {
      type: Boolean
    },
    value: {
      type: String
    }
  },
  computed: {
    iconSideClass() {
      let className = null;
      if (this.icon) {
        switch (this.iconSide) {
          case 'left':
            className = 'has-icon';
            break;
          case 'right':
            className = 'has-icon--right';
            break;
          default:
            className = 'has-icon';
        }
      }
      return className;
    }
  }
};
</script>