// addTodoItem.steps.js (Jest-Cucumber test)

import { defineFeature, loadFeature } from "jest-cucumber";
import { mount } from "@vue/test-utils";
import TodoList from "@/views/TodoListView.vue";

const feature = loadFeature("./tests/add-task.feature");

defineFeature(feature, (test) => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(TodoList);
  });

  test("Add a to-do item", ({ given, when, then, and }) => {
    given("I am on the application homepage", () => {
      // No specific action required, as we've already mounted the component
    });

    when('I enter "Buy groceries" as the task description', () => {
      const taskInput = wrapper.find('[data-testid="task-input"]');
      taskInput.setValue("Buy groceries");
    });

    and('I click the "Add" button', () => {
      const addButton = wrapper.find('[data-testid="add-button"]');
      addButton.trigger("click");
    });

    then(
      'the to-do item "Buy groceries" should be added to my to-do list',
      () => {
        const taskItem = wrapper.find('[data-testid="task-item"]');
        expect(taskItem.text()).toBe("Buy groceries");
      }
    );
  });
});
