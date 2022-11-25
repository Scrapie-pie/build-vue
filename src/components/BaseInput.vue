<template>
  <input
    class="input"
    :class="classMod"
    :type="type"
    :placeholder="placeholder"
    v-bind="$attrs"
    v-on="inputListeners"
    ref="input"
  >
</template>

<script>
export default {
  name: "BaseInput",
  inheritAttrs: false,
  props: {
    label: String,
    type: {
      type: String,
      //validator: (value) => ['text', 'mail', 'password', 'number'].includes(value),
      default: "text",
    },
    placeholder: String,
    mod: {
      type: String,
      validator: (value) => ['primary'].includes(value),
    },
  },
  computed: {
    inputListeners: function () {
      let vm = this
      return Object.assign({},
        this.$listeners,
        {
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    },
    classMod() {
      if (this.mod) {
        return `input--${this.mod}`
      }
    },
  },
  methods: {
    focus() {
      console.log('qwewqeqe')
      console.log(this.$refs.input)
      this.$refs.input.focus();
    }
  },
  mounted() {
    this.$emit('mounted', this.$el.value)
  }
}
</script>

<style lang="scss">
.input {


}
</style>
