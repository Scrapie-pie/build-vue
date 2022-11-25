<template>
  <div class="block-actual">
    <div class="block-actual__preview">
      <BaseImage :file-name="imageFileName" class="block-actual__image"/>
    </div>
    <span class="block-actual__name">{{name}}</span>
  </div>
</template>

<script>
import BaseImage from "@/components/BaseImage";
export default {
  name: 'BlockActual',
  props: {
    imageFileName: String,
    name: String
  },
  components: {
    BaseImage
  }
}
</script>

<style lang="scss">
.block-actual {
  @include flex-it(column, 5px);
  align-items: center;
  justify-content: center;

  &__preview {

  }

  &__image {
    max-width: 152px;
    border-radius: 50%;
    filter: brightness(90%);
  }
}
</style>
