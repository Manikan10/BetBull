$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/WebPageTestScenarios.feature");
formatter.feature({
  "line": 1,
  "name": "Webpage tests for BetBull",
  "description": "",
  "id": "webpage-tests-for-betbull",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login Tests",
  "description": "",
  "id": "webpage-tests-for-betbull;login-tests",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Load the Website and goto SignIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Ensure the \"\u003cexpMessage\u003e\" error message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "webpage-tests-for-betbull;login-tests;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "expMessage"
      ],
      "line": 10,
      "id": "webpage-tests-for-betbull;login-tests;;1"
    },
    {
      "cells": [
        "",
        "",
        "An email address required."
      ],
      "line": 11,
      "id": "webpage-tests-for-betbull;login-tests;;2"
    },
    {
      "cells": [
        "test@betbull.com",
        "",
        "Password is required."
      ],
      "line": 12,
      "id": "webpage-tests-for-betbull;login-tests;;3"
    },
    {
      "cells": [
        "",
        "testbetbull",
        "An email address required."
      ],
      "line": 13,
      "id": "webpage-tests-for-betbull;login-tests;;4"
    },
    {
      "cells": [
        "validemail@betbull.com",
        "password1",
        "Authentication failed."
      ],
      "line": 14,
      "id": "webpage-tests-for-betbull;login-tests;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Login Tests",
  "description": "",
  "id": "webpage-tests-for-betbull;login-tests;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Load the Website and goto SignIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the \"\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Ensure the \"An email address required.\" error message is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "webTestsSuite.load_the_website_and_goto_signin_page()"
});
formatter.result({
  "duration": 15720388300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 11
    },
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "webTestsSuite.enter_the_email_and_password(String,String)"
});
formatter.result({
  "duration": 310129000,
  "status": "passed"
});
formatter.match({
  "location": "webTestsSuite.click_on_signin_button()"
});
formatter.result({
  "duration": 766849300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 12
    }
  ],
  "location": "webTestsSuite.ensure_the_expMessage_error_message_is_displayed(String)"
});
