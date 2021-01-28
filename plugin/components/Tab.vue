<script>
export default {
  name: 'pui-tab',
  props: {
    header: {
      type: String,
      required: true
    },
    index: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean
    },
    icon: {
      type: String
    }
  },
  render() {
    let iconClasses = 'mr-1';
    if(this.icon) iconClasses += ` ${this.icon}`;

    return (
      <>
        <input type="radio" id={this.index} name={this.name} checked={this.checked} />
        <label for={this.index} class="tab">
          {this.icon && <i className={iconClasses} focusable="false" aria-hidden="hidden"></i>}
          {this.header}
        </label>
        <div class="tab-panel">
          {this.$slots.default()}
        </div>
      </>
    )
  }
};
</script>