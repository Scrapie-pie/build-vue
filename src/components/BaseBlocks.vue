<template>
  <div class="blocks">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseBlocks"
}
</script>

<style>
.blocks {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>