<script>
import useCaptureAttributes from '../composables/useCaptureAttributes';

export default {
  name: 'card-title',
  inheritAttrs: false,
  render() {
    let { classes, rest } = useCaptureAttributes(this, 'card__title');

    return (
      <div className={classes} {...rest}>
        {this.$slots.default()}
      </div>
    );
  }
};
</script>