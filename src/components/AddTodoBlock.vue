<template>
  <div class="add-todo">
    <div 
      class="add-todo__new-task-btn" 
      v-if="!isActive"
      @click="newTaskButtonClick"
    >
      <SvgIcon 
        type="plus"
        class="add-todo__plus-icon"
      />
      <span class="add-todo_new-task-text">Add Task</span>
    </div>

    <div 
      class="add-todo__new-task-form"
      v-if="isActive"
    >
      <input 
        type="text" 
        class="input-default add-todo__form-input"
        v-model="title"
        ref="form-input"
        @keypress.enter="createButtonClick"
      >
      <div class="add-todo__form-buttons">
        <div class="btn-default btn-green add-todo__form-button" @click="createButtonClick">Create task</div>
        <div class="btn-default btn-grey add-todo__form-button" @click="cancelButtonClick">Cancel</div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'

export default {
  components: {SvgIcon},

  props: {
    listId: Number
  },


  data() {
    return {
      isActive: false,
      title: ''
    }
  },


  methods: {
    createButtonClick() {
      if (!this.title) return
      this.createTask()
      this.isActive = false
      this.title = ''
    },

    cancelButtonClick() {
      this.isActive = false
      this.title = ''
    },

    async newTaskButtonClick() {
      this.isActive = true
      await this.$nextTick()
      this.$refs['form-input'].focus()
    },

    createTask() {
      this.$store.dispatch('createTodoItem', {listId: this.listId, title: this.title})
    }
  }
}
</script>

<style lang="scss">
.add-todo {
  .add-todo {
      &__plus-icon {
        margin-left: 7px;
        margin-right: 25px;
        width: 15px;
        height: 20px;
        transition: .1s;
      }

      &__new-task-btn {
        padding: 10px;
        cursor: pointer;
        display: flex;
      }

      &__new-task-text {
      }

      &__form-input {
        margin-bottom: 10px;
      }

      &__form-buttons {
        display: flex;
      }

      &__form-button {
        margin-right: 5px;
        padding: 10px 20px;
      }
    }
  }
</style>