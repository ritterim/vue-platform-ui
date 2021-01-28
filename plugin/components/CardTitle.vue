<script>
import useCaptureAttributes from '../composables/useCaptureAttributes';

export default {
  name: 'pui-card-title',
  inheritAttrs: false,
  render() {
    const { classes, rest } = useCaptureAttributes(this, 'card__title');

    return (
      <div className={classes} {...rest}>
        {this.$slots.default()}
      </div>
    );
  }
};
</script>