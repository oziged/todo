<template>
  <div class="todo-list">
    <div 
      class="todo-list__title"
    >

      <span 
        class="todo-list__title-text" 
        v-if="!isEditing"
        :style="{color: list.color}"
      >
        {{ list.title }}
      </span>
      <input 
        type="text"
        class="todo-list__edit-input input-default" 
        v-model="newTitle" 
        v-if="isEditing"
        ref="edit-input"
        :style="{color: list.color}"
        @keypress.enter="saveButtonClick"
      >

      <div 
        class="todo-list__manage-block" 
        @click.stop
      >
        <template v-if="!isEditing">
          <SvgIcon 
            type="edit"
            color="#0000004f"
            class="todo-list__manage-icon" 
            @click.native="editIconClick"
          />

          <SvgIcon 
            type="close"
            color="#0000004f"
            class="todo-list__manage-icon"
            @click.native="deleteIconClick"
          />
        </template>

        <template v-else>
          <div class="todo-list__manage-btn" @click="saveButtonClick">save</div>
          <div class="todo-list__manage-btn" @click="closeButtonClick">close</div>
        </template>
      </div>
    </div>

    <div class="todo-list__divider"></div>

    <div class="todo-list__todo-items">
      <TodoItem
        v-for="(todo, index) in list.todos" 
        :key="index"
        :todo="todo"
        :listId="list.id"
        class="todo-list__todo-item"
      />
    </div>
    
    <AddTodoBlock 
      class="todo-list__add-todo-block"
      :listId="list.id"
    />
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'
import TodoItem from '@/components/TodoItem'
import AddTodoBlock from '@/components/AddTodoBlock'

export default {
  components: {TodoItem, AddTodoBlock, SvgIcon},

  props: {
    list: Object,
  },


  data() {
    return {
      isEditing: false,
      newTitle: ''
    }
  },


  created() {
    this.newTitle = this.list.title
  },


  methods: {
    saveButtonClick() {
      this.isEditing = false
      this.updateTodoList({title: this.newTitle})
    },

    async editIconClick() {
      this.isEditing = true
      await this.$nextTick()
      this.$refs['edit-input'].focus()
    },

    deleteIconClick() {
      this.$store.dispatch('deleteTodoList', {id: this.list.id})
    },

    closeButtonClick() {
      this.newTitle = this.list.title
      this.isEditing = false
    },

    updateTodoList(obj) {
      this.$store.dispatch('updateTodoList', {
        listId: this.list.id,
        updateObj: obj
      })
    }
  },
}
</script>

<style lang="scss">
  .todo-list {
    margin-bottom: 30px;

    &__title {
      position: relative;
      margin-top: 0;
      letter-spacing: -.5px;
      margin-bottom: 20px;
      height: 49px;
    }

    &__edit-input {
      font-family: 'Montserrat', sans-serif;
      font-size: 2.5rem;
      margin: -8px 0 0 -11px;
      letter-spacing: -.5px;
    }

    &__title-text {
      font-size: 2.5rem;
      font-family: 'Montserrat', sans-serif;
    }

    &__divider {
      width: 100%;
      height: 1px;
      background: #F2F2F2;
      margin-bottom: 20px;
    }

    &__todo-items {
      margin-bottom: 20px;
    }

    &__todo-item {
      margin-bottom: 10px;
    }

    &__manage-block {
      display: flex;
      position: absolute;
      height: 100%;
      top: 0;
      right: 20px;
      // opacity: 0;
      transition: .2s;
      cursor: pointer;
    }

    &__manage-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 15px;
      height: 100%;
      padding: 0 7.5px;
      box-sizing: content-box;
    }

    &__manage-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      opacity: .6;
      &:hover {
        opacity: 1;
      }
    }
  }
</style>