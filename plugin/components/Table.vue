<script>
import useCaptureAttributes from '../composables/useCaptureAttributes';

export default {
  name: 'pui-table',
  inheritAttrs: false,
  props: {
    unresponsive: {
      type: Boolean
    },
    hoverOff: {
      type: Boolean
    },
    headers: {
      type: Array,
      required: true
    }
  },
  render() {
    let { classes, rest } = useCaptureAttributes(this, 'table');
    if(this.hoverOff) classes += ` table--no-hover`;
    if(this.unresponsive) classes += ` unresponsive`;

    return (
      <table className={classes} {...rest}>
        <thead>
          <tr>
            {
              this.headers.map(header => (<th>{header}</th>))
            }
          </tr>
        </thead>
        <tbody>
          {this.$slots.default()}
        </tbody>
      </table>
    )
  }
};
</script>