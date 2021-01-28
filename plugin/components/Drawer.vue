<script>
import useCaptureAttributes from '../composables/useCaptureAttributes';

export default {
  name: 'pui-drawer',
  inheritAttrs: false,
  props: {
    // Sets whether the drawer is open or not
    open: {
      type: Boolean,
    },
    // Set the direction the drawer should appear in the viewport
    direction: {
      type: String,
      validator: function (value) {
        return ['right', 'bottom', 'left'].indexOf(value) !== -1;
      },
    },
    // Set the size of the drawer (only option currently is "single")
    size: {
      type: String,
      validator: function (value) {
        return ['single'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    drawerSize() {
      let className = null;
      if (this.size) {
        switch (this.size) {
          case 'single':
            className = 'drawer--single-row';
            break;
          default:
            className = null;
        }
      }
      return className;
    },
    drawerDirection() {
      let className = null;
      if (this.direction) {
        switch (this.direction) {
          case 'right':
            className = 'drawer-right';
            break;
          case 'bottom':
            className = 'drawer-bottom';
            break;
          case 'left':
            className = 'drawer-left';
            break;
          default:
            className = 'drawer-bottom';
        }
      }
      return className;
    },
  },
  render() {
    let { classes, rest } = useCaptureAttributes(this, 'drawer');
    if(!this.open) classes += ' drawer--closed';
    if(this.drawerDirection) classes += ` ${this.drawerDirection}`;
    if(this.drawerSize) classes += ` ${this.drawerSize}`;

    return (
      <div className={classes} aria-hidden={!this.open} {...rest}>
        <div class="drawer__inner">
          {this.$slots.default()}
        </div>
      </div>
    )
  }
};
</script>