<template>
  <div class="slider-categories-tabs">
    <span class="slider-categories-tabs__tab">Женщинам</span>
    <span class="slider-categories-tabs__tab">Мужчинам</span>
    <span class="slider-categories-tabs__tab">Детям</span>
    <span class="slider-categories-tabs__all"><a href="#">Все ></a></span>
  </div>
</template>

<script>
import BaseImage from "@/components/BaseImage";
import BlockActual from "@/components/BlockActual";
import BaseSection from "@/components/BaseSection";
export default {
  name: 'SliderCategoriesTabs',
  components: {
    BaseSection,
    BlockActual,
    BaseImage
  }
}
</script>

<style lang="scss">
.slider-categories-tabs {
  display: flex;
  align-items: center;
  @include to-responsive(gap, 10px, 45px);

  &__all {
    text-align: right;
    width: 100%;
  }
}
</style>
