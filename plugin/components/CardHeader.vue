<script>
import useCaptureAttributes from '../composables/useCaptureAttributes';
export default {
  name: 'pui-card-header',
  inheritAttrs: false,
  render() {
    const { classes, rest } = useCaptureAttributes(this, 'card__header');
    return (
      <div className={classes} {...rest}>
        {this.$slots.default()}
      </div>
    );
  }
};
</script>