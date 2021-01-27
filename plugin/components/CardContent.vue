<script>
export default {
  name: 'card-content',
  props: {
    // Sets a height on card content and overflow-y:auto
    scroll: {
      type: Boolean,
    },
  },
  render() {
    let classes = 'card__content';
    if(this.scroll) classes += ' card__content--scroll';
    return (
      <div className={classes}>
        {this.$slots.default()}
      </div>
    )
  }
};
</script>