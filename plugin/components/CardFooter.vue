<script>
import useCaptureAttributes from '../composables/useCaptureAttributes';

export default {
  name: 'pui-card-footer',
  inheritAttrs: false,
  render() {
    const { classes, rest } = useCaptureAttributes(this, 'card__footer');

    return (
      <div className={classes} {...rest}>
        {this.$slots.default()}
      </div>
    )
  }
};
</script>
