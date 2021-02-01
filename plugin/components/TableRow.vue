<script>
export default {
  name: 'pui-table-row',
  render() {
    return (
      <tr>{this.$slots.default()}</tr>
    )
  }
};
</script>