<template>
  <form class="input-search">
    <div class="input-search__wrapper">
      <div class="input-search__query" @click="onClick">
        <BaseIcon icon="search" class="input-search__icon-search"/>
        <BaseInput type="text" placeholder="Поиск" ref="input"/>
      </div>
      <BaseIcon icon="close"/>
    </div>
  </form>
</template>

<script>
import BaseSvg from './BaseSvg.vue';
import BaseButton from './BaseButton.vue';
import BaseContainer from './BaseContainer.vue';
import BaseInput from "@/components/BaseInput";
import BaseFieldTest from "@/components/Test/BaseFieldTest";
import BaseIcon from "@/components/BaseIcon";
export default {
  name: 'InputSearch',
  data() {
    return {
      value: '',
    }
  },
  methods: {
    onClick(event) {
      this.$refs.input.focus()
    }
  },

  components: {
    BaseIcon,
    BaseSvg,
    BaseButton,
    BaseContainer,
    BaseInput,
    BaseFieldTest
  }
}
</script>

<style lang="scss">
.input-search {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #E5E5E5;
    border-radius: 15px;
  }
  &__query {
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content: center;
    cursor: pointer;
  }

  &__icon {
    &-search {
      width: 102px;
      border-right: 1px solid #E5E5E5;
      background: #F4F4F4;
      border-radius: 15px;
      @include flex-centralize;
      //height: 100%;
    }
  }

  .input {
    height: 38px;
  }
}
</style>
