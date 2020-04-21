<template>
  <div 
    class="icon-wrapper"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <svg 
      v-if="type == 'edit'"
      :style="{fill: activeColor}"
      xmlns="http://www.w3.org/2000/svg" 
      x="0px" y="0px"
      viewBox="0 0 383.947 383.947"
    >
      <polygon points="0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893 			"/>
      <path d="M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04C386.027,77.92,386.027,64.373,377.707,56.053z"/>
    </svg>

    <svg 
      v-if="type == 'close'"
      :style="{fill: activeColor}"
      version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
        <g><path d="M543.7,500L980.9,62.8c12.1-12.1,12.1-31.7,0-43.7C968.8,7,949.3,7,937.2,19.1L500,456.3L62.8,19.1C50.7,7,31.2,7,19.1,19.1C7,31.1,7,50.7,19.1,62.8L456.3,500L19.1,937.2C7,949.3,7,968.8,19.1,980.9c12.1,12.1,31.6,12.1,43.7,0L500,543.7l437.2,437.2c12.1,12.1,31.6,12.1,43.7,0s12.1-31.6,0-43.7L543.7,500z"/></g>
    </svg>

    <svg 
      v-if="type == 'checkbox'"
      :style="{fill: activeColor}"
      xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      viewBox="0 0 24 24"
    >
      <path d="M 19.28125 5.28125 L 9 15.5625 L 4.71875 11.28125 L 3.28125 12.71875 L 8.28125 17.71875 L 9 18.40625 L 9.71875 17.71875 L 20.71875 6.71875 Z"></path>
    </svg>

    <svg 
      v-if="type == 'plus'"
      class="plus-icon"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
      <rect class="vertical-line" x="70" width="20" height="160"/>
      <rect class="horizontal-line" y="70" width="160" height="20"/>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    color: String,
    hoverColor: String,
  },

  
  data() {
    return {
      isHovered: false
    }
  },


  computed: {
    activeColor() {
      if (this.color && !this.isHovered) return this.color
      if (this.hoverColor && this.isHovered) return this.hoverColor
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon-wrapper {
    cursor: pointer;
  }

  svg {
    width: 100%;
    height: 100%;
  }
</style>