<!--<template>-->
<!--  <div class="section">-->

<!--  </div>-->
<!--</template>-->

<script>
import BaseContainer from "@/components/BaseContainer";
export default {
  name: "BaseSection",
  render(h) {
    const slot = this.useContainer ?
        <BaseContainer>{this.$slots.default}</BaseContainer> :
        this.$slots.default
    return (
        <section>
          {slot}
        </section>
    );
  },
  props: {
    // mod: {
    //   type: String,
    //   validator: (value) => ['md'].includes(value),
    //   //default: 'primary'
    // },
    useContainer: {
      type: Boolean,
      default: true,
    }
  },
  mounted() {
    //console.log(this)
  },
  components: {BaseContainer},
}
</script>

<style lang="scss">
.section {
  display: flex;
  //flex-direction: column;
  width: 100%;

  &_md {
    gap: 65px;
  }

}
</style>