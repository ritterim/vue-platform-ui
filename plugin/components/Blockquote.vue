<script>
export default {
  name: 'pui-blockquote',
  inheritAttrs: false,
  props: {
    author: {
      type: String
    },
    cite: {
      type: String
    },
    citeURL: {
      type: String
    }
  },
  render() {
    return (
      <blockquote cite={this.citeURL}>
        <p>
          {this.$slots.default()}
        </p>
        {this.author &&
          <footer>
            —{this.author}{this.cite && <cite>, {this.cite}</cite>}
          </footer>
        }
      </blockquote>
    )
  }
};
</script>