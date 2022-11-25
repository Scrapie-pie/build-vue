<template>
  <component :is="tag" :href="href" class="link">
    <slot></slot>
  </component>
</template>

<script>
import BaseSvg from './BaseSvg.vue';
export default {
  name: "BaseLink",
  props: {
    tag:  { type: String, default: 'a' },
    href: { type: String, default: '#' },
    //isBlock: Boolean,
    // icon: String,
  },
  components: {
    BaseSvg
  }
}
</script>

<style lang="scss">
.link {
  //@include flex-it(row, 15px, true);
  //align-items: center;
  //color: get-var(color, link);
}
</style>
