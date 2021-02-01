<script>
import useCaptureAttributes from '../composables/useCaptureAttributes';

export default {
  name: 'pui-drawer-content',
  inheritAttrs: false,
  render() {
    const { classes, rest } = useCaptureAttributes(this, 'drawer__content');

    return (
      <div className={classes} {...rest}>
        {this.$slots.default()}
      </div>
    )
  }
};
</script>
