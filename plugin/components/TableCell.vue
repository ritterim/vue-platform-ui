<script>
export default {
  name: 'pui-table-cell',
  props: {
    label: {
      type: String
    }
  },
  render() {
    return (
      <td data-label={this.label}>
        {this.$slots.default()}
      </td>
    )
  }
};
</script>