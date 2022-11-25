<template>
  <button class="button" :class="classMod">
    <BaseSvg v-if="hasIconLeft" :icon="computedIcon"/>
    <slot></slot>
    <BaseSvg v-if="hasIconRight" :icon="computedIcon"/>
  </button>
</template>

<script>
import BaseSvg from './BaseSvg.vue';

export default {
  name: 'BaseButton',
  props: {
    mod: {
      type: String,
      validator: (value) => ['primary', 'secondary'].includes(value),
      default: 'primary'
    },
    iconLeft: String,
    iconRight: String,
    sent: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    classMod() {
      return `button--${this.mod}`;
    },
    computedIcon() {
      if (this.iconLeft) return this.iconLeft;
      if (this.iconRight) return this.iconRight;
    },
    hasIconLeft() {
      console.log(this.iconLeft)
      return this.iconLeft;
    },
    hasIconRight() {
      return this.iconRight;
    },

  },
  mounted() {
    console.log(this.iconLeft)
  },
  components: {
    BaseSvg
  }
}
</script>

<style lang="scss">
.button {
  $self: &;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  border: none;
  position: relative;
  font-size: 14px;
  padding: 12px 15px;
  border-radius: 3px;
  font-weight: 700;
  transition: .25s ease-out;

  &--primary {
    $bg: get-var(color, primary);
    background-color: $bg;
    &:hover {
      background-color: darken($bg, 10%);
    }
  }
  &--secondary {
    $bg: get-var(color, white);
    background-color: $bg;
    border: 1px solid get-var(color, border);
    &:hover {
      background-color: darken($bg, 5%);
    }
  }
}
</style>
