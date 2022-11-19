<template>
  <form class="input-search" @submit.prevent="submit">
    <div class="input-search__wrapper">
      <div class="input-search__query" @click="focusing">
        <BaseIcon icon="search-query" />
        <BaseInput type="text" placeholder="Поиск" ref="input" />
      </div>
      <BaseButton>Button</BaseButton>
    </div>
  </form>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
import BaseButton from './BaseButton.vue';
import BaseContainer from './BaseContainer.vue';
import BaseInput from "@/components/BaseInput";
import BaseFieldTest from "@/components/Test/BaseFieldTest";
export default {
  name: 'InputSearch',
  data() {
    return {
      value: '',
    }
  },
  methods: {
    submit() {
      console.log(this.value)
    },
    focusing() {
      console.log(this.$refs.input)
      this.$refs.input.focus();
    }


  },

  components: {
    BaseIcon,
    BaseButton,
    BaseContainer,
    BaseInput,
    BaseFieldTest
  }
}
</script>

<style lang="scss">
.input-search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #6ba9fb;
  width: 100%;
  max-width: 400px;

  &__wrapper {
    @include flex-it;
    width: 100%;
  }

  &__query {
    @include flex-it(row, 10px);
    align-items: center;
    width: 100%;
    padding: 0 10px;
  }
}
</style>
