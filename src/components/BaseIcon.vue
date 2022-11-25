<template>
  <BaseSvg v-bind="$attrs" :icon="icon" :init-font-size="fontSize" :class="classSub" />
</template>

<script>
import BaseSvg from "@/components/BaseSvg";
export default {
  name: 'BaseIcon',
  inheritAttrs: false,
  data() {
    return {
      sizes: {
        location: {
          default: '19px',
          circle: '24px'
        },
        logo: {
          default: '40px',
        },
        search: {
          default: '22px',
        },
        close: {
          default: '12px',
        },
      }
    }
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    initFontSize: {
      type: String,
    },
    classMod: {
      type: String,
      required: false,
      validator: (value) => ['default', 'circle'].includes(value),
      //default: 'default'
    }
  },
  computed: {
    fontSize() {
      if (this.initFontSize) return this.initFontSize;
      return this.sizes[this.icon]?.[this.classMod || 'default'];
    },
    classSub() {
      if (this.classMod) return `icon_${this.classMod}`;
    }
  },
  methods: {

  },
  mounted() {
    console.log(this.fontSize)
  },
  components: {
    BaseSvg
  },
};


</script>

<style lang="scss">
.icon {
  svg {
    fill: currentColor;
  }
  &_circle {
    width: 40px;
    height: 40px;
    background-color: #F1BD45;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    fill: #0075FF;
  }
}
</style>
