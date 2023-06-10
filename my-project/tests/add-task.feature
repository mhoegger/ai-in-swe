Feature: Add a To-Do Item
  As a user
  I want to be able to add a new to-do item to my list

  Scenario: Add a to-do item
    Given I am on the application homepage
    When I enter "Buy groceries" as the task description
    And I click the "Add" button
    Then the to-do item "Buy groceries" should be added to my to-do list