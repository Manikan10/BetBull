Feature: API tests for BetBull

  Scenario Outline: 1.Successful Registration
    Given As an API client
    When POST request for "<resourceName>" with "<parameters>"
    Then Validate the "<statusCode>"
    And Print the "<token>"

    Examples: 
      | resourceName | parameters                               | statusCode | token             |
      | /register    | email:eve.holt@reqres.in,password:pistol |        200 | QpwL5tke4Pnpja7X4 |

  Scenario Outline: 2.Unsuccessful Registration
    Given As an API client
    When POST request for "<resourceName>" with "<parameters>"
    Then Validate the "<statusCode>"
    And Print the response

    Examples: 
      | resourceName | parameters               | statusCode |
      | /register    | email:eve.holt@reqres.in |        400 |

  Scenario Outline: 3.Get Users List
    Given As an API client
    When Send a GET Request for "<resourceName>"
    Then Validate the "<statusCode>"
    And Verify "<numberOfUsers>" user entries are returned

    Examples: 
      | resourceName | statusCode | numberOfUsers |
      | /users       |        200 |             6 |
