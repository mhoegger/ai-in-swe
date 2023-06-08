<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="newItem" placeholder="Add a new item..." />
    <button id="add-button" type="submit">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newItem: "",
    };
  },
  methods: {
    addTodo() {
      this.$emit("add", this.newItem);
      this.newItem = "";
    },
  },
};
</script>
