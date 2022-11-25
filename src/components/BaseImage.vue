<template>
  <img v-if="!isBg" :src="src" :alt="alt" class="image">
  <div v-else :style="{backgroundImage: src}" class="image" />
</template>

<script>
export default {
  name: 'BaseImage',
  props: {
    fileName: String,
    alt: {
      type: String,
      default: '',
    },
    isBg: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    src() {
      const src = require('../assets/img/' + this.fileName);
      return this.isBg ? 'url(' + src + ')' : src;
    }
  },
  components: {}
}
</script>

<style lang="scss">
img.image {
  width: 100%;
}
div.image {
  background: center/cover no-repeat;
}
</style>
