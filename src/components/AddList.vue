<template>
  <div class="add-list">
    <div 
      class="btn-default btn-default_has_icon add-list__btn"
      @click="addListButtonClick"  
    >
        <svg 
          class="btn-default__left-icon plus-icon"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
          <rect class="vertical-line" x="70" width="20" height="160"/>
          <rect class="horizontal-line" y="70" width="160" height="20"/>
        </svg>
      <span class="add-list__btn-text">Add List</span>
    </div>

    <transition name="fade">
      <addListPopup 
        v-if="popupIsVisible"
        @close="popupIsVisible = false" 
        :popupColors="popupColors"
        :popupDefaultColor="popupDefaultColor"
        ref="popup" 
      />
    </transition>
  </div>
</template>

<script>
import AddListPopup from '@/components/AddListPopup'

export default {
  components: {AddListPopup},

  data() {
    return {
      popupIsVisible: false,
      popupColors: ['#B6E6BD', '#FFBBCC', '#42B883', '#FF6464', '#C355F5', '#64C4ED'],
      popupDefaultColor: '#B6E6BD'
    }
  },


  methods: {
    async addListButtonClick() {
      this.popupIsVisible = !this.popupIsVisible
      if (this.popupIsVisible) {
        await this.$nextTick()
        this.$refs.popup.$refs['title-input'].focus()
      }
    }
  },
}
</script>

<style lang="scss">
  .plus-icon {
    width: 12px;
    height: 12px;
    fill: #767676;
  }

  .add-list {
    &__btn {
      margin-bottom: 10px;
    }

    &__btn-text {
      color: #767676;
    }
  }
</style>