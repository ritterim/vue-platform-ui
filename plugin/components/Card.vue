<script>
import useCaptureAttributes from '../composables/useCaptureAttributes';

export default {
  name: 'pui-card',
  inheritAttrs: false,
  render() {
    const { classes, rest } = useCaptureAttributes(this, 'card');
    return (
      <div className={classes} {...rest}>
        {this.$slots.default()}
      </div>
    )
  }
};
</script>
