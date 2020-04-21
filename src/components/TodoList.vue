<template>
  <div class="todo-list">
    <div 
      class="todo-list__title"
      :style="{color: list.color}"
    >
      {{ list.title }}
    </div>

    <div class="todo-list__divider"></div>

    <TodoItem
      v-for="(todo, index) in list.todos" 
      :key="index"
      :todo="todo"
      :listId="list.id"
    />
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'

export default {
  components: {TodoItem},

  props: {
    list: Object,
  },


  methods: {
   
  },
}
</script>

<style lang="scss">
  .todo-list {
    margin-bottom: 30px;

    &__title {
      margin-top: 0;
      font-size: 2.5rem;
      font-family: 'Montserrat', sans-serif;
      letter-spacing: -.5px;
    }

    &__divider {
      width: 100%;
      height: 1px;
      background: #F2F2F2;
      margin: 20px 0;
    }
  }
</style>