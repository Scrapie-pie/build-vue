<template>
  <div class="page-ui">
    <BaseContainer>
      <BaseSections mod="md">
        <BaseH v-for="i of 6" :key="i" :level="i">Заголовок h{{i}}</BaseH>
        <br/>
        <BaseFlex space="micro-lg">
          <div class="page-ui__color"
               v-for="(value, key, index) in cssVariables.colors" :key="key"
               :style="{backgroundColor: value}">
          </div>
        </BaseFlex>
        <BaseFont :bold="true">asdsa</BaseFont>

        <form>

          <!--        <BaseInput></BaseInput>-->


          <BaseFieldTest v-model="formData.text" placeholder="Введите ваше имя">
            <template #left>
              <BaseIcon icon="logo" />
            </template>
            <template #right>
              <span>X</span>
            </template>
          </BaseFieldTest>
          <BaseFieldTest v-model="formData.text" placeholder="Введите ваше имя" placeholder-mod="popup">
            <template #left>
              <BaseIcon icon="logo" />
            </template>
            <template #right>
              <span>X</span>
            </template>
          </BaseFieldTest>
          <BaseFieldTest v-model="formData.text" placeholder="Введите ваше имя" placeholder-mod="inline">
            <template #left>
              <BaseIcon icon="logo" />
            </template>
            <template #right>
              <span>X</span>
            </template>
          </BaseFieldTest>
        </form>
      </BaseSections>

    </BaseContainer>
  </div>

</template>

<script>
import TheMain from "@/components/TheMain";
import SectionCategories from "@/components/SectionCategories";
import BaseSections from "@/components/BaseSections";
import SectionActual from "@/components/SectionActual";
import SectionHero from "@/components/SectionHero";
import BlockNavigation from "@/components/NavigationSub";
import TheHeader from "@/components/TheHeader";
import FieldSearch from "@/components/InputSearch";
import BaseIcon from "@/components/BaseIcon";
import BaseH from "@/components/BaseH";
import BaseContainer from "@/components/BaseContainer";
import BaseFont from "@/components/BaseFont";
import {getCSSVars} from "@/assets/js/scripts";
import BaseFlex from "@/components/BaseFlex";
import BaseInput from "@/components/BaseInput";
import BaseFieldTest from "@/components/Test/BaseFieldTest";

export default {
  name: 'UI',
  data() {
    return {
      formData: {
        text: ''
      },
      cssVariables: {
        colors: getCSSVars('color')
      }
    }
  },
  methods: {

  },
  mounted() {

  },
  components: {
    BaseFieldTest,
    BaseInput,
    BaseFlex,
    BaseContainer,
    BaseH,
    SectionCategories,
    BaseSections,
    SectionActual,
    SectionHero,
    BlockNavigation,
    TheHeader,
    FieldSearch,
    BaseIcon,
    TheMain,
    BaseFont
  }
}
</script>

<style lang="scss">
.page-ui {
  padding-bottom: 200px;
  &__colors {
    @include flex-it(row, 20px);
    flex-wrap: wrap;
  }
  &__color {
    width: 100px;
    height: 100px;
    background-color: var(--color_primary);
    border-radius: 50%;
    border: 1px solid #f8e7ff;
  }
}
</style>
