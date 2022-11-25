<template>
  <div class="sections" :class="classMod">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseSections",
  props: {
    mod: {
      type: String,
      validator: (value) => ['md'].includes(value),
      //default: 'primary'
    },
  },
  computed: {
    classMod() {
      return this.mod ? `sections_${this.mod}` : "";
    }
  }
}
</script>

<style lang="scss">
.sections {
  display: flex;
  flex-direction: column;
  width: 100%;

  &_md {
    gap: 65px;
  }

}
</style>