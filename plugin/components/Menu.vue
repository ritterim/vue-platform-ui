<script>
import useCaptureAttributes from '../composables/useCaptureAttributes';

export default {
  name: 'pui-menu',
  inheritAttrs: false,
  props: {
    menuClasses: {
      type: String
    },
    menuStyle: {
      type: String,
      validator: function (value) {
        return ['bordered', 'underlined'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    addStyle() {
      let className = null;

      if (this.menuStyle) {
        switch (this.menuStyle) {
          case 'bordered':
            className = 'site-menu--bordered';
            break;
          case 'underlined':
            className = 'hover-underline';
            break;
          default:
            className = null;
        }
      }
      
      return className;
    }
  },
  data() {
    return {
      mobileOpen: false,
    };
  },
  methods: {
    toggleMobileMenu(evt) {
      evt.preventDefault();
      this.mobileOpen = !this.mobileOpen
    }
  },
  render() {
    const { classes, rest } = useCaptureAttributes(this, 'site-menu-wrapper');
    let navClasses = 'site-menu';
    if(this.menuClasses) navClasses += ` ${this.menuClasses}`;
    if(this.addStyle) navClasses += ` ${this.addStyle}`;
    if(this.mobileOpen) navClasses += ` active`;

    return (
      <header className={classes} {...rest}>
        <button class="site-menu-mobile-action" onClick={this.toggleMobileMenu}>
          <span class="sr-only">Toggle Navigation</span>
          <i aria-hidden="true" focusable="false" class="pi-menu pi-xl"></i>
        </button>
        <nav className={navClasses}>
          {this.$slots.default()}
        </nav>
      </header>
    )
  }
};
</script>