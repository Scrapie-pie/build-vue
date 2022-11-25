<script>
export default {
  name: 'BaseH',
  render(h) {
    const Heading =`h${this.level}`;
    return (
        <Heading class={`h${this.level}`}>
          {this.$slots.default}
        </Heading>
    );
  },
  props: {
    level: [String, Number],
    default: 3,
    required: true,
  },
  components: {}
}
</script>

<style lang="scss">
@for $i from 1 through 6 {
  $color: get-var(color, black);
  $weight: 700;
  $line-height: 1.22em;
  //$margin-bottom: get-var(space, xs);

  .h#{$i} {
    @include h($i, $color, $weight: $weight, $margin-bottom: 0);
    line-height: $line-height;
  }
}
</style>
