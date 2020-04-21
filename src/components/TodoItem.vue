<template>
  <div :class="{
      'todo-item btn-default': true,
      'todo-item_checkbox-hover': !todo.completed,
    }"
    @click="checkboxClick"
  >
    <div 
      :class="{
        'todo-item__checkbox': true,
        'todo-item__checkbox_active': !todo.completed,
        'todo-item__checkbox_completed': todo.completed,
        'todo-item__checkbox_hover': !todo.completed
      }"
    >
      <SvgIcon 
        type="checkbox"
        class="todo-item__svg"
      />
    </div>
    
    <span class="todo-item__text" v-if="!todo.editing">{{ todo.title }}</span>
    <input type="text" class="todo-item__edit-input input-default" v-model="newTitle" @click.stop v-if="todo.editing">

    <div 
      class="todo-item__manage-block" 
      @click.stop
    >
      <template v-if="!todo.editing">
        <SvgIcon 
          type="edit"
          color="#0000004f"
          class="todo-item__manage-icon" 
          @click.native="editIconClick"
        />

        <SvgIcon 
          type="close"
          color="#0000004f"
          class="todo-item__manage-icon" 
          @click.native="deleteIconClick"
        />
      </template>

      <template v-else>
        <div class="todo-item__manage-btn" @click="saveButtonClick">save</div>
        <div class="todo-item__manage-btn" @click="closeButtonClick">close</div>
      </template>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'

export default {
  components: {SvgIcon},

  props: {
    todo: Object,
    listId: Number
  },


  data() {
    return {
      newTitle: null
    }
  },


  created() {
    console.log(this.todo.title)
    this.newTitle = this.todo.title
  },


  methods: {
    checkboxClick() {
      this.updateTodoItem({completed: !this.todo.completed})
    },

    editIconClick() {
      this.updateTodoItem({editing: true})
    },

    deleteIconClick() {
      this.$store.dispatch('deleteTodoItem', {
        listId: this.listId,
        itemId: this.todo.id
      })
    },

    saveButtonClick() {
      this.updateTodoItem({editing: false, title: this.newTitle})
    },

    closeButtonClick() {
      this.newTitle = this.todo.title; 
      this.updateTodoItem({editing: false})
    },

    updateTodoItem(obj) {
       this.$store.dispatch('updateTodoItem', {
        listId: this.listId,
        itemId: this.todo.id,
        updateObj: obj
      })
    }
  }
}
</script>

<style lang="scss">
  .todo-list .todo-item {
    position: relative;
    display: flex;
    align-items: center;
    height: 45px;
    transition: .2s;

    &:hover {
      box-shadow: 0 0 5px #0000000d;

      .todo-item__manage-block {
        opacity: 1;
      }
    }
  }

  .todo-item {
    &_checkbox-hover {
      &:hover {
        .todo-item__checkbox {
          background: #F2F2F2;
        }
      }
    }

    &__checkbox {
      width: 25px;
      height: 25px;
      margin-right: 10px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: .1s;
      &_hover {
        &:hover {
          background: #F2F2F2;
        }
      }

      &_completed {
        background: #4DD599;
        .todo-item__svg {
          fill: white;
        }
      }

      &_active {
        border: 2px solid #E8E8E8;
      }
    }

    &__text {
      margin-left: 11px;
      display: inline-block;
    }

    &__svg {
      width: 15px;
      height: 20px;
    }

    &__manage-block {
      display: flex;
      position: absolute;
      height: 100%;
      right: 20px;
      opacity: 0;
      transition: .2s;
    }

    &__manage-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 15px;
      height: 100%;
      margin-left: 15px;
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

    .todo-item .todo-item__edit-input {
      width: auto;
      font-size: 1rem;
      flex-grow: 1;
    }
</style>