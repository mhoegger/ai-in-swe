import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./tests/features/demo/addition.feature');

defineFeature(feature, (test) => {
  let result;
  let firstNumber;
  let secondNumber;

  beforeEach(() => {

  });

  test('Add two numbers', ({ given, when, then, and }) => {
    given(/^I have entered (\d+) into the calculator$/, (number) => {
        firstNumber = +number
    });

    and(/^I have entered (\d+) into the calculator$/, (number) => {
        secondNumber = +number
    });

    when('I press add', () => {
      result = firstNumber + secondNumber
    });

    then(/^the result should be (\d+) on the screen$/, (expectedResult) => {
      expect(result).toBe(+expectedResult);
    });
  });
});