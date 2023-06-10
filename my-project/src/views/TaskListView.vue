<template>
  <div class="task-list">
    <TaskInput :tasks="tasks" @add-task="addTask" />
    <TaskListItems :tasks="tasks" />
  </div>
</template>

<script>
import TaskInput from "@/components/TaskInput.vue";
import TaskListItems from "@/components/TaskListItems.vue";

export default {
  components: {
    TaskInput,
    TaskListItems,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
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
</style>
