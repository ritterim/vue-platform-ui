<script>
import useCaptureAttributes from '../composables/useCaptureAttributes';

export default {
  name: 'accordion-header',
  inheritAttrs: false,
  props: {
    // Prop to determine if the accordion is active or not
    active: {
      type: Boolean,
    },
  },
  render() {
    const { classes, rest } = useCaptureAttributes(this, 'accordion__header');
    return (
      <div className={classes} {...rest} aria-expanded={this.active} role="button" tabIndex="0">
        {this.$slots.default()}
      </div>
    )
  },
};
</script>