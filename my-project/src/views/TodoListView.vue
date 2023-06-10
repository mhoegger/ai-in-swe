<template>
  <div class="task-list">
    <input
      v-model="newTask"
      type="text"
      data-testid="task-input"
      class="task-input"
    />
    <button @click="addTask" data-testid="add-button" class="add-button">
      Add
    </button>
    <ul class="task-list-items">
      <li
        v-for="task in tasks"
        :key="task.id"
        data-testid="task-item"
        class="task-item"
      >
        {{ task.description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({
          id: Date.now(),
          description: this.newTask,
        });
        this.newTask = "";
      }
    },
  },
};
</script>

<style>
.task-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.task-input {
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 50%;
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
  width: 20%;
}

.task-list-items {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 500px;
  text-align: center;
}

.task-item {
  padding: 10px;
  font-size: 16px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}
</style>
