<template>
  <div class="slider-categories-item">
    <BaseImage file-name="dress_01.webp" :is-bg="true" class="slider-categories-item__image" />
    <div class="slider-categories-item__info">
      <div class="slider-categories-item__name">Платье с длинными рукавами и воротником-стойкой в оттенке "кофейный меланж"</div>
      <div class="slider-categories-item__price">79.99 BYN</div>
    </div>
  </div>
</template>

<script>
import BaseImage from "@/components/BaseImage";
export default {
  name: 'SliderCategoriesItem',
  components: {
    BaseImage
  }
}
</script>

<style lang="scss">
.slider-categories-item {
  &__image {
    @include to-responsive(height, 100px, 365px);
  }
}
</style>
