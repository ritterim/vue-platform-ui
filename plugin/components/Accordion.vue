<script>
import useCaptureAttributes from '../composables/useCaptureAttributes';

// The Platform UI Accordion is a component that expands when the header is clicked to reveal more content.
export default {
  name: 'accordion',
  props: {
    // Prop to determine if the accordion is active or not
    active: {
      type: Boolean,
    },
  },
  render() {
    let { classes, rest } = useCaptureAttributes(this, 'accordion');
    if(this.active) classes += ' active';
    
    return (
      <div className={classes} {...rest}>
        {this.$slots.default()}
      </div>
    );
  },
};
</script>
