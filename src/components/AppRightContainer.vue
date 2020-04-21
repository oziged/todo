<template>
  <div class="app__right-container">
    <TodoList 
      v-for="(list) in lists" 
      :key="list.id"
      :list="list"
    />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'

export default {
  components: {TodoList},
  
  computed: {
    lists() {
      if (this.$store.state.mode === 'all') return this.$store.state.todoLists
      if (this.$store.state.mode === 'one') {
        let todoList = this.$store.state.todoLists.find(list => list.id == this.$store.state.activeListId)
        console.log(todoList)
        return [todoList]
      }
    }
  }
}
</script>

<style lang="scss">
  .app {
    &__right-container {
      background-color: white;
      width: 75%;
      padding: 60px;
      overflow: auto;
    }
  }
</style>