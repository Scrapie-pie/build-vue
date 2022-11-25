<template>
  <div class="slider-categories">
    <SliderCategoriesTabs />
    <div class="slider-categories__items">
      <SliderCategoriesItem v-for="i of 5" :key="i"/>
    </div>
  </div>
</template>

<script>
import BaseImage from "@/components/BaseImage";
import BlockActual from "@/components/BlockActual";
import BaseSection from "@/components/BaseSection";
import SliderCategoriesTabs from "@/components/SliderCategoriesTabs";
import SliderCategoriesItem from "@/components/SliderCategoriesItem";
export default {
  name: 'SliderCategories',
  components: {
    SliderCategoriesItem,
    SliderCategoriesTabs,
    BaseSection,
    BlockActual,
    BaseImage
  }
}
</script>

<style lang="scss">
.slider-categories {

  &__items {
    @include flex-it(row, 10px);


  }
}
</style>
