<template>
  <div class="element-menu">
    <div class="element-menu__wrapper" @click="onClick">
      <ElementMenuIcon :is-opened="isOpened" />
      <span>Каталог</span>
    </div>
  </div>
</template>

<script>
import ElementMenuIcon from "@/components/ElementMenuIcon";
export default {
  name: 'ElementMenu',
  data() {
    return {
      isOpened: false,
    }
  },
  methods: {
    onClick(event) {
      this.isOpened = !this.isOpened;
      this.$emit('clicked', this.isOpened);
    }
  },
  emits: ['clicked'],
  components: {
    ElementMenuIcon,
  }
}
</script>

<style lang="scss">
.element-menu {
  display: inline-flex;
  align-items: center;
  &__wrapper {
    display: inline-flex;
    align-items: center;
    //justify-content: center;
    gap: 3px;
    cursor: pointer;
  }

}
</style>
