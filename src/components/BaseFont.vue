<template>
  <component :is="tag" class="font" :class="classArray">
    <slot></slot>
  </component>
</template>

<script>
import {getCSSVars} from "@/assets/js/scripts";

export default {
  name: 'BaseFont',
  data() {
    return {
      cssVariables: {
        //colors: getCSSVars('color')
      }
    }
  },
  props: {
    tag:  { type: String, default: 'span' },
    color: {
      type: String,
      //validator: (value) => [getCSSVars('color')].includes(value),
    },
    bold: Boolean,
    italic: Boolean,
    textDecoration: {
      type: String,
      validator: (value) => ['underline', 'line-through'].includes(value),
    }
  },
  computed: {
    classArray() {
      let array = [];
      if (this.color) array.push(`font_color_${this.color}`);
      if (this.bold) array.push(`font_bold`);
      if (this.italic) array.push(`font_italic`);
      if (this.textDecoration) array.push(`font_text-decoration_${this.textDecoration}`);
      return array;
    }
  },
  components: {}
}
</script>

<style lang="scss">
.font {
  @each $key, $value in map-get($variables, color) {
    &_color_#{$key} {
      color: var(--color_#{$key});
    }
  }
  &_bold {
    font-weight: bold;
  }
  &_italic {
    font-style: italic;
  }
  &_text-decoration {
    &_underline { text-decoration: underline }
    &_line-through { text-decoration: line-through }
  }
}
</style>
