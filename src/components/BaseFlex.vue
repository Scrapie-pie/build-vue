<template>
  <div class="flex" :class="classArray">
    <slot></slot>
  </div>
</template>

<script>
import {getCSSVars} from "@/assets/js/scripts";

export default {
  name: 'BaseFlex',
  data() {
    return {
      cssVariables: {
        //colors: getCSSVars('color')
      }
    }
  },
  props: {
    space: {
      type: String,
      //validator: (value) => ['underline', 'line-through'].includes(value),
    },
    phoneSpace: {
      type: String,
    },
    autoRelative: {
      type: Boolean,
      default: false,
    },

  },
  computed: {
    classArray() {
      let array = [];
      if (this.space) array.push(`flex_space_${this.space}`);
      return array;
    }
  },
  components: {}
}
</script>

<style lang="scss">
.flex {
  display: flex;
  align-items: center;
  //justify-content: center;

  &_space {
    &_micro-xxl {
      @include to-responsive(gap, get-var(space, micro-sm), get-var(space, micro-xxl));
    }
  }

  //@each $key, $value in map-get($variables, space) {
  //  &_space_#{$key} {
  //    //gap: var(--color_#{$key});
  //    //@include to-responsive(gap, $value);
  //    gap: to-unit($value, em);
  //  }
  //  &_space_phone_#{$key} {
  //    //gap: var(--color_#{$key});
  //    gap: $value;
  //  }
  //}
}
</style>
