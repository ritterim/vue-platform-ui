<script>
import useCaptureAttributes from '../composables/useCaptureAttributes';

export default {
  name: 'drawer-content',
  inheritAttrs: false,
  render() {
    let { classes, rest } = useCaptureAttributes(this, 'drawer__content');

    return (
      <div className={classes} {...rest}>
        {this.$slots.default()}
      </div>
    )
  }
};
</script>
