import { defineFeature, loadFeature } from "jest-cucumber";
import { mount } from "@vue/test-utils";
import TodoListView from "@/views/TodoListView2.vue";
import NewItemForm from "@/components/newItemForm.vue";
import ToDoList from "@/components/ToDoList.vue";

const feature = loadFeature("tests/features/add-item.feature");

defineFeature(feature, (test) => {
  describe("To-Do List", () => {
    test("Add a new item to the list", ({ given, when, then }) => {
      let app;

      given("I am on the to-do list page", () => {
        app = mount(TodoListView);
      });

      when("I enter a new item and click the Add button", () => {
        const addTaskFormWrapper = app.findComponent(NewItemForm);
        addTaskFormWrapper.vm.$emit("add", "New Item");
      });

      then("the new item should be added to the list", () => {
        const taskListWrapper = app.findComponent(ToDoList);
        const taskListHtml = taskListWrapper.html();
        expect(taskListHtml).toContain("New Item");
      });
    });
  });
});
