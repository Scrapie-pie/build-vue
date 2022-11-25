<template>
  <div class="block-header-icons">
    <BaseIcon icon="person" init-font-size="24px" />
    <BaseIcon icon="like" init-font-size="24px" />
    <BaseIcon icon="basket" init-font-size="24px" />
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon";
export default {
  name: 'SectionHeaderIcons',
  components: {
    BaseIcon,
  }
}
</script>

<style lang="scss">
.block-header-icons {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}
</style>
