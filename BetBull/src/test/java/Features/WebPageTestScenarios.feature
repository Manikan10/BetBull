Feature: Webpage tests for BetBull

  Scenario Outline: Login Tests
    Given Load the Website and goto SignIn page
    When Enter the "<email>" and "<password>"
    And Click on SignIn button
    Then Ensure the "<expMessage>" error message is displayed

    Examples: 
      | email                  | password    | expMessage |
      |                        |             | An email address required. |
      | test@betbull.com       |             | Password is required. 			|
      |                        | testbetbull | An email address required. |
      | validemail@betbull.com | password1   | Authentication failed.			|
