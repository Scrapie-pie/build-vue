<template>
  <header class="header">
    <BaseSections>
      <SectionTop />
      <SectionHeader />
    </BaseSections>
  </header>
</template>

<script>
import BaseContainer from './BaseContainer.vue';
import InputSearch from "@/components/InputSearch";
import BaseButton from "@/components/BaseButton";
import BaseBlocks from "@/components/BaseBlocks";
import SectionTop from "@/components/SectionTop";
import SectionHeader from "@/components/SectionHeader";
import BaseSections from "@/components/BaseSections";
export default {
  name: 'TheHeader',
  components: {
    BaseSections,
    SectionHeader,
    BaseContainer,
    InputSearch,
    BaseButton,
    SectionTop,
    BaseBlocks
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  //flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}
</style>
