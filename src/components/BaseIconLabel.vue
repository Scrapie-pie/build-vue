<template>
  <span class="icon-label" :class="`icon-label_${classMod}`">
    <BaseIcon :icon="icon" :class-mod="classMod" />
      <slot></slot>
  </span>
</template>

<script>
import BaseIcon from "@/components/BaseIcon";
export default {
  name: 'BaseIconLabel',
  inheritAttrs: false,
  data() {
    return {

    }
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    classMod: {
      type: String,
      required: false,
      validator: (value) => ['default'].includes(value),
      default: 'default'
    },
  },
  computed: {

  },
  components: {
    BaseIcon
  },
};


</script>

<style lang="scss">
.icon-label {
  display: flex;
  align-items: center;
  &_default {
    gap: 5px;
  }
}
</style>
