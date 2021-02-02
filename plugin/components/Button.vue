<script>
export default {
  name: 'pui-button',
  render() {
    const buttonClasses = 'button'.concat(' ', this.buttonSize || '');
    return (
      <button class={buttonClasses}>
        {this.$slots.default()}
      </button>
    );
  },
  props: {
    // Sets the size of the button
    size: {
      type: String,
      validator: function (value) {
        return ['lg'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    buttonSize() {
      let className = null;
      if (this.size) {
        switch (this.size) {
          case 'lg':
            className = 'button--lg';
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