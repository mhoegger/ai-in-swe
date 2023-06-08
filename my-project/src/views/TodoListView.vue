<template>
  <div>
    <h1>To-Do List</h1>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="newItem" placeholder="Add a new item..." />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="(item, index) in todos" :key="index">
        <span v-if="!item.completed">{{ item.title }}</span>
        <input
          type="checkbox"
          v-model="item.completed"
          v-if="!item.completed"
        />
        <del v-if="item.completed">{{ item.title }}</del>
        <button @click="deleteTodo(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.newItem.trim()) {
        this.todos.push({ title: this.newItem.trim(), completed: false });
        this.newItem = "";
      }
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>
