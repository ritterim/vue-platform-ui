<script>
import useCaptureAttributes from '../composables/useCaptureAttributes';

export default {
  name: 'pui-tabs',
  inheritAttrs: false,
  props: {
    flat: {
      type: Boolean
    },
    unresponsive: {
      type: Boolean
    }
  },
  render() {
    let { classes, rest } = useCaptureAttributes(this, 'tabs');
    if(this.flat) classes += ` tabs--flat`;
    if(this.unresponsive) classes += ` unresponsive`;

    return (
      <div className={classes} {...rest}>
        {this.$slots.default()}
      </div>
    )
  }
};
</script>