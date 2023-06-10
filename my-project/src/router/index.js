import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  // add the TodoListView component as a route
  // use routname todo
  {
    path: "/todo",
    name: "todo",
    component: () =>
      import(/* webpackChunkName: "todo" */ "../views/TodoListView.vue"),
  },
  // add the TodoListView component as a route
  // use routname todo2
  {
    path: "/task",
    name: "task",
    component: () =>
      import(/* webpackChunkName: "todo2" */ "../views/TaskListView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
