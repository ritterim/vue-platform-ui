<script>
import useCaptureAttributes from '../composables/useCaptureAttributes';

export default {
  name: 'pui-drawer-header',
  inheritAttrs: false,
  render() {
    let { classes, rest } = useCaptureAttributes(this, 'drawer__header');

    return (
      <div className={classes} {...rest}>
        {this.$slots.default()}
      </div>
    )
  }
};
</script>
