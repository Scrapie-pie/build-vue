<template>
  <BaseSection class="section-categories">
    <h3>Актуальное</h3>
    <SliderCategories />
  </BaseSection>
</template>

<script>
import BaseImage from "@/components/BaseImage";
import BlockActual from "@/components/BlockActual";
import BaseSection from "@/components/BaseSection";
import SliderCategories from "@/components/SliderCategories";
export default {
  name: 'SectionCategories',
  components: {
    SliderCategories,
    BaseSection,
    BlockActual,
    BaseImage
  }
}
</script>

<style lang="scss">
.section-categories {

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

}
</style>
