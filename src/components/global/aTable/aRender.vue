
<script>
export default {
  name: 'aRender',
  functional: true,
  props: {
    scope: {
      type: Object,
      default() {
        return {};
      },
    },
    render: {
      type: Function,
      default() {
        return () => {};
      },
    },
  },
  render: (h, ctx) => {
    return ctx.props.render ? ctx.props.render(h, ctx.props.scope) : '';
  },
};
</script>
