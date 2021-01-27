<script>
import useCaptureAttributes from '../composables/useCaptureAttributes';

export default {
  name: 'accordion-content',
  inheritAttrs: false,
  props: {
    // Prop to determine if the accordion is active or not
    active: {
      type: Boolean,
    },
  },
  render() {
    let { classes, rest } = useCaptureAttributes(this, 'accordion__content');
    if(this.active) classes += ' active';

    return (
      <div className={classes} {...rest} aria-hidden={!this.active}>
        Active: {!!this.active}
        {this.$slots.default()}
      </div>
    )
  },
};
</script>
