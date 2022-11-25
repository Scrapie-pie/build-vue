<template>
  <div class="element-menu-icon" :class="{ 'element-menu-icon_opened': isOpened }" @click="onClick">
    <span class="element-menu-icon__line"></span>
    <span class="element-menu-icon__line"></span>
    <span class="element-menu-icon__line"></span>
  </div>
</template>

<script>
export default {
  name: 'ElementMenuIcon',
  data() {
    return {
      //isOpened: false,
    }
  },
  props: {
    isOpened: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    onClick(event) {
      //console.log('qwe')
      //this.isOpened = !this.isOpened;
      //this.$emit('clicked', this.isOpened);
    }
  },
  emits: ['open'],
  components: {}
}
</script>

<style lang="scss">
.element-menu-icon {
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  width: 15px;
  cursor: pointer;

  &_opened & {
    &__line {
      background-color: #F1BD45;
    }
  }

  &__line {
    width: 100%;
    height: 1px;
    background-color: black;
  }
}
</style>
