Feature: Calculator and User Information

Scenario: Add two numbers
  Given I have entered 50 and 60 into the calculator
  When I press add
  Then the result should be 110 on the screen

Scenario: Get user information
  Given I want to get user information with name "User 1"
  When I get the user information
  Then the user name should be "User 1" and age should contain "5 years"
