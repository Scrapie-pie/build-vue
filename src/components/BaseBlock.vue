<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseBlock",
  data() {
    return {
      className: '' //block
    }
  }
}
</script>

<style>
/*.block {*/
/*  width: 100%;*/
/*}*/
</style>