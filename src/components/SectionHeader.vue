<template>
  <section class="section-header">
    <div class="section-header__container">
      <ElementMenu />
      <BaseIcon icon="logo" />
      <InputSearch />
      <BlockHeaderIcons />
    </div>
  </section>
</template>

<script>
import BaseContainer from './BaseContainer.vue';
import ElementMenu from "@/components/ElementMenu";
import BlockHeaderIcons from "@/components/BlockHeaderIcons";
import BaseIcon from "@/components/BaseIcon";
import BaseFieldTest from "@/components/Test/BaseFieldTest";
import InputSearch from "@/components/InputSearch";
export default {
  name: 'SectionHeader',
  data() {
    return {
      searchQuery: ''
    }
  },
  components: {
    InputSearch,
    BaseFieldTest,
    BlockHeaderIcons,
    ElementMenu,
    BaseContainer,
    BaseIcon
  }
}
</script>

<style lang="scss">
.section-header {
  padding: 30px 0;
  border-bottom: 1px solid black;
  &__container {
    display: grid;
    grid-template-columns: minmax(auto, 150px) auto 1fr auto;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
