$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/ApiTestScenarios.feature");
formatter.feature({
  "line": 1,
  "name": "API tests for BetBull",
  "description": "",
  "id": "api-tests-for-betbull",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "1.Successful Registration",
  "description": "",
  "id": "api-tests-for-betbull;1.successful-registration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "As an API client",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "POST request for \"\u003cresourceName\u003e\" with \"\u003cparameters\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate the \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Print the \"\u003ctoken\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "api-tests-for-betbull;1.successful-registration;",
  "rows": [
    {
      "cells": [
        "resourceName",
        "parameters",
        "statusCode",
        "token"
      ],
      "line": 10,
      "id": "api-tests-for-betbull;1.successful-registration;;1"
    },
    {
      "cells": [
        "/register",
        "email:eve.holt@reqres.in,password:pistol",
        "200",
        "QpwL5tke4Pnpja7X4"
      ],
      "line": 11,
      "id": "api-tests-for-betbull;1.successful-registration;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "1.Successful Registration",
  "description": "",
  "id": "api-tests-for-betbull;1.successful-registration;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "As an API client",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "POST request for \"/register\" with \"email:eve.holt@reqres.in,password:pistol\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate the \"200\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Print the \"QpwL5tke4Pnpja7X4\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "apiTestSuite.as_an_api_client()"
});
formatter.result({
  "duration": 847521400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/register",
      "offset": 18
    },
    {
      "val": "email:eve.holt@reqres.in,password:pistol",
      "offset": 35
    }
  ],
  "location": "apiTestSuite.post_request_for_resourceName_with_parameters(String,String)"
});
formatter.result({
  "duration": 1335923000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 14
    }
  ],
  "location": "apiTestSuite.validate_the_statusCode(int)"
});
formatter.result({
  "duration": 10384600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QpwL5tke4Pnpja7X4",
      "offset": 11
    }
  ],
  "location": "apiTestSuite.print_the_token(String)"
});
formatter.result({
  "duration": 539079700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "2.Unsuccessful Registration",
  "description": "",
  "id": "api-tests-for-betbull;2.unsuccessful-registration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "As an API client",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "POST request for \"\u003cresourceName\u003e\" with \"\u003cparameters\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Validate the \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Print the response",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "api-tests-for-betbull;2.unsuccessful-registration;",
  "rows": [
    {
      "cells": [
        "resourceName",
        "parameters",
        "statusCode"
      ],
      "line": 20,
      "id": "api-tests-for-betbull;2.unsuccessful-registration;;1"
    },
    {
      "cells": [
        "/register",
        "email:eve.holt@reqres.in",
        "400"
      ],
      "line": 21,
      "id": "api-tests-for-betbull;2.unsuccessful-registration;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "2.Unsuccessful Registration",
  "description": "",
  "id": "api-tests-for-betbull;2.unsuccessful-registration;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "As an API client",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "POST request for \"/register\" with \"email:eve.holt@reqres.in\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Validate the \"400\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Print the response",
  "keyword": "And "
});
formatter.match({
  "location": "apiTestSuite.as_an_api_client()"
});
formatter.result({
  "duration": 80500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/register",
      "offset": 18
    },
    {
      "val": "email:eve.holt@reqres.in",
      "offset": 35
    }
  ],
  "location": "apiTestSuite.post_request_for_resourceName_with_parameters(String,String)"
});
formatter.result({
  "duration": 131397400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 14
    }
  ],
  "location": "apiTestSuite.validate_the_statusCode(int)"
});
formatter.result({
  "duration": 351000,
  "status": "passed"
});
formatter.match({
  "location": "apiTestSuite.print_the_response()"
});
formatter.result({
  "duration": 96300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "3.Get Users List",
  "description": "",
  "id": "api-tests-for-betbull;3.get-users-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "As an API client",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Send a GET Request for \"\u003cresourceName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Validate the \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Verify \"\u003cnumberOfUsers\u003e\" user entries are returned",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "api-tests-for-betbull;3.get-users-list;",
  "rows": [
    {
      "cells": [
        "resourceName",
        "statusCode",
        "numberOfUsers"
      ],
      "line": 30,
      "id": "api-tests-for-betbull;3.get-users-list;;1"
    },
    {
      "cells": [
        "/users",
        "200",
        "6"
      ],
      "line": 31,
      "id": "api-tests-for-betbull;3.get-users-list;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "3.Get Users List",
  "description": "",
  "id": "api-tests-for-betbull;3.get-users-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "As an API client",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Send a GET Request for \"/users\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Validate the \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Verify \"6\" user entries are returned",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "apiTestSuite.as_an_api_client()"
});
formatter.result({
  "duration": 52500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/users",
      "offset": 24
    }
  ],
  "location": "apiTestSuite.send_a_get_request_for_resourceName(String)"
});
formatter.result({
  "duration": 89166600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 14
    }
  ],
  "location": "apiTestSuite.validate_the_statusCode(int)"
});
formatter.result({
  "duration": 834900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 8
    }
  ],
  "location": "apiTestSuite.verify_numberOfUsers_user_entries_are_returned(int)"
});
formatter.result({
  "duration": 309168300,
  "status": "passed"
});
});