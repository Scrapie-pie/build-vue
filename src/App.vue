<template>
  <div id="app">
    <BlockHeader />


  </div>
</template>

<script>
import BlockHeader from './components/BlockHeader.vue';
import FieldSearch from './components/InputSearch.vue';
import BaseIcon from "@/components/BaseIcon";

export default {
  name: 'App',
  components: {
    BlockHeader,
    FieldSearch,
    BaseIcon,
  }
}
</script>

<style lang="scss">
@import './assets/scss/style';
#app {
  overflow: hidden;
  background-color: #DEDEDE;
}
</style>
