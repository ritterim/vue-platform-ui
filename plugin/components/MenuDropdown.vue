<script>
import useCaptureAttributes from '../composables/useCaptureAttributes';

export default {
  name: 'pui-menu-dropdown',
  inheritAttrs: false,
  props: {
    header: {
      type: String
    }
  },
  data() {
    return {
      dropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown(evt) {
      evt.preventDefault();
      this.dropdownOpen = !this.dropdownOpen
    }
  },
  render() {
    let { classes, rest } = useCaptureAttributes(this, 'dropdown');
    if(this.dropdownOpen) classes += ` dropdown-active`;

    return (
      <div className={classes} {...rest}>
        <div class="site-menu__item dropdown__trigger" onClick={this.toggleDropdown}>
          {this.header}
          <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
        </div>
        <div class="dropdown__content">
          {this.$slots.default()}
        </div>
      </div>
    )
  }
};
</script>