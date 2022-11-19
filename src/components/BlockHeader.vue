<template>
  <header class="header">
    <input-search />
    <base-button icon-left="add">Добавить</base-button>
  </header>
</template>

<script>
import BaseContainer from './BaseContainer.vue';
import InputSearch from "@/components/InputSearch";
import BaseButton from "@/components/BaseButton";
export default {
  name: 'BlockHeader',
  components: {
    BaseContainer,
    InputSearch,
    BaseButton
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}
</style>
