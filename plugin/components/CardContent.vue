<script>
import useCaptureAttributes from '../composables/useCaptureAttributes';

export default {
  name: 'pui-card-content',
  inheritAttrs: false,
  props: {
    // Sets a height on card content and overflow-y:auto
    scroll: {
      type: Boolean,
    },
  },
  render() {
    let { classes, rest } = useCaptureAttributes(this, 'card__content');
    if(this.scroll) classes += ' card__content--scroll';
    return (
      <div className={classes} {...rest}>
        {this.$slots.default()}
      </div>
    )
  }
};
</script>