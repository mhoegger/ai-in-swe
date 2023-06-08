<template>
  <div>
    <h1>To-Do List</h1>
    <NewItemForm @add="(item) => addTodo(item)" />
    <TodoList :todos="todos" @delete="(item) => deleteTodo(item)" />
  </div>
</template>

<script>
import NewItemForm from "@/components/NewItemForm.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  components: {
    NewItemForm,
    TodoList,
  },
  data() {
    return {
      newItem: "",
      todos: [],
    };
  },
  methods: {
    addTodo(newTitle) {
      if (newTitle.trim()) {
        this.todos.push({ title: newTitle.trim(), completed: false });
        this.newItem = "";
      }
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>
