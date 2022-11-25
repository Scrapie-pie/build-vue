<template>
  <div class="grid" :class="classArray">
    <slot></slot>
  </div>
</template>

<script>
import {getCSSVars} from "@/assets/js/scripts";

export default {
  name: 'BaseGrid',
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
.grid {
  //display: grid;
  gap: 30px 35px;
  //background-color: blue;

  @include smart-grid(3); //work
  //@include smart-grid([(3)], $mode: 'span'); //work
  //@include smart-grid(4, $stretch: true); //not work
  //@include smart-grid(4, $mode: 'span', $stretch: true); // hz work or not

  //@include smart-grid([[3] [3] [4] [2]], $mode: 'span', $stretch: true);


  //@include smart-grid([[2] [2] [1] [1] [2] [2] [2]], $mode: 'span', $stretch: 'repetitive'); // not working yet

  //@include smart-grid(('auto', 3), $mode: 'span'); // work


  //@include smart-grid((auto, 2), $mode: 'span', $stretch: true); //work

  //@include smart-grid((0.5, null), $cols: 8); // work

  //@include smart-grid((100px, 150px), $cols: 8); // work
  //@include smart-grid((100px, 300px)); // work

  //@include smart-grid((110px, 9)); //work
  //@include smart-grid((9, 100px)); //work
  //@include smart-grid(200px); //work
  //@include smart-grid((130px, 12/5)); // work
  //@include smart-grid([100px, 5, 200px]); // work

  //@include smart-grid((auto, 8)); //work
  //@include smart-grid((auto, 200px)); // work
  //@include smart-grid((auto, 5, 200px)); // work

  //@include smart-grid((0.5, 9)); //work
  //@include smart-grid((0.5, 180px)); //work
  //@include smart-grid((0.5, 5, 200px)); // work

  //@include smart-grid((9, 3)); // Значит 9 колонок, и тянем по 3 каждую -> ДОБАВИТЬ

  //@include smart-grid(('auto', 3), $mode: 'span', $stretch: true); // work
  //@include smart-grid((0.5, 3), $mode: 'percent'); // work
  //@include smart-grid((0.5, 3), $mode: 'px'); // work

  //@include smart-grid((0.5, 3)); // work

  // возможно если меньше единицы, то типа тянуть колонку, если больше, то по сколько вмещать


  //@include smart-grid((0.75, 3));
  //@include smart-grid((3) (3));

  //@include smart-grid([[400px], [400px], [400px]]); // not one-pair // mb refactor
  //@include smart-grid([[400px], [400px], [400px]]);
}
</style>
