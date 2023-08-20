import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import { Action, IUser } from "../../src";

const action: Action = new Action();
let calculator: number[] = [];
let result: number;
let userName: String;
let user: IUser | undefined;

Given(
  "I have entered {int} and {int} into the calculator",
  (num1: number, num2: number) => {
    calculator.push(num1, num2);
  }
);
Given("I want to get user information with name {string}", (name: String) => {
  userName = name;
});

When("I press add", () => {
  result = action.add(calculator);
});

When("I get the user information", () => {
  user = action.getUseName(userName);
});

Then("the result should be {int} on the screen", (expectedResult: number) => {
  expect(result).to.equal(expectedResult);
});

Then(
  "the user name should be {string} and age should contain {string}",
  (expectedName: string, expectedAge: string) => {
    expect(user?.name).to.equal(expectedName);
    expect(user?.age).to.equal(expectedAge);
  }
);

Then("no user information should be returned", () => {
  expect(user).to.be.undefined;
});
