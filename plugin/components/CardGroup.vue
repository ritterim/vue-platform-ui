<script>
import useCaptureAttributes from '../composables/useCaptureAttributes';

export default {
  name: 'pui-card-group',
  inheritAttrs: false,
  render() {
    const { classes, rest } = useCaptureAttributes(this, 'card__group');

    return (
      <div className={classes} {...rest}>
        {this.$slots.default()}
      </div>
    )
  }
};
</script>