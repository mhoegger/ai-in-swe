<template>
  <div class="task-input">
    <input
      v-model="newTask"
      type="text"
      data-testid="task-input"
      class="task-input-field"
    />
    <button @click="addTask" data-testid="add-button" class="add-button">
      Add
    </button>
  </div>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.$emit("add-task", { description: this.newTask });
        this.newTask = "";
      }
    },
  },
};
</script>

<style>
.task-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.task-input-field {
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  width: 70%;
}

.add-button {
  padding: 10px;
  font-size: 16px;
  background-color: #cc061e;
  color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
</style>
