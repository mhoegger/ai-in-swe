<template>
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
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
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
