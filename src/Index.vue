<template>
  <BaseSections mod="md">
    <SectionHero />
    <SectionActual />
    <SectionCategories />
    <SectionCategories />
  </BaseSections>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import FieldSearch from './components/InputSearch.vue';
import BaseIcon from "@/components/BaseSvg";
import TheMain from "@/components/TheMain";
import BlockNavigation from "@/components/NavigationSub";
import SectionHero from "@/components/SectionHero";
import SectionActual from "@/components/SectionActual";
import BaseSections from "@/components/BaseSections";
import SectionCategories from "@/components/SectionCategories";

export default {
  name: 'Index',
  components: {
    SectionCategories,
    BaseSections,
    SectionActual,
    SectionHero,
    BlockNavigation,
    TheHeader,
    FieldSearch,
    BaseIcon,
    TheMain
  }
}
</script>

<style lang="scss">

</style>
