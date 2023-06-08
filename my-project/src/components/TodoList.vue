<template>
  <ul>
    <li v-for="(item, index) in todos" :key="index">
      <span v-if="!item.completed">{{ item.title }}</span>
      <input type="checkbox" v-model="item.completed" v-if="!item.completed" />
      <del v-if="item.completed">{{ item.title }}</del>
      <button @click="$emit('delete', index)">Delete</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>
