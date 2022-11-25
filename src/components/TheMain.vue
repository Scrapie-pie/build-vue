<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<script>
import BaseContainer from './BaseContainer.vue';
import InputSearch from "@/components/InputSearch";
import BaseButton from "@/components/BaseButton";
import VSectionTop from "@/components/SectionTop";
export default {
  name: 'TheMain',
  components: {
    BaseContainer,
    InputSearch,
    BaseButton,
    VSectionTop
  }
}
</script>

<style lang="scss">
.main {
  flex-grow: 1;
}
</style>
