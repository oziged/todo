<template>
  <div 
    :class="{
      'btn-default': true,
      'btn-default_has_icon': true,
      'todo-list__group-btn': true, 
      'btn-hover': todoList.id != $store.state.activeListId,
      'btn-active': todoList.id === $store.state.activeListId && $store.state.mode == 'one'
    }"
    @click="setActiveList"
  >
    <div class="btn-default__left-icon">
      <div class="circle todo-list__group-circle" :style="{backgroundColor: todoList.color}"/></div>
      {{ todoList.title }}
    </div>
</template>

<script>
export default {
  props: {
    todoList: Object
  },


  methods: {
    setActiveList() {
      this.$store.dispatch('setActiveList', {value: this.todoList.id})
    }
  }
}
</script>

<style lang="scss">
  .todo-list {
    &__group-btn {
      transition: .2s;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
    }

    &__group-circle {
    }
  }
</style>