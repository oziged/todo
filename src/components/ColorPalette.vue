<template>
  <div class="color-palette">
    <div 
      :class="{
        'color-palette__circle': true,
        'color-palette__circle_active': color == selectedColor
      }"
      v-for="(color, index) in colors" :key="index"
      :style="{backgroundColor: color}"
      @click="circleClick(color)"
    />
  </div>
</template>

<script>
export default {
  props: {
    colors: Array,
    selectedColor: String
  },


  data() {
    return {
    }
  },


  mounted() {
  },


  methods: {
    circleClick(color) {
      this.$emit('change', color)
    }
  },
}
</script>

<style lang="scss">
  .color-palette {
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;

    &__circle {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin-right: 5px;

      &_active {
        border: 2px solid #02020261;
      }
    }
  }
</style>