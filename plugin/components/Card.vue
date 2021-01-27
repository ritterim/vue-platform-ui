<script>
export default {
  name: 'pui-card',
  render() {
    return (
      <div class="card">
        {this.$slots.default()}
      </div>
    )
  }
};
</script>
