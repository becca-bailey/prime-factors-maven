$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PrimeFactors.feature");
formatter.feature({
  "line": 1,
  "name": "Prime Factors",
  "description": "",
  "id": "prime-factors",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Returns an empty collection",
  "description": "",
  "id": "prime-factors;returns-an-empty-collection",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I generate the prime factors of 0",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "I generate the prime factors of 1",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "it returns an empty collection",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 32
    }
  ],
  "location": "Steps.iGenerateThePrimeFactorsOf(int)"
});
formatter.result({
  "duration": 150247030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 32
    }
  ],
  "location": "Steps.iGenerateThePrimeFactorsOf(int)"
});
formatter.result({
  "duration": 134786,
  "status": "passed"
});
formatter.match({
  "location": "Steps.itReturnsAnEmptyCollection()"
});
formatter.result({
  "duration": 9545352,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Returns a prime number",
  "description": "",
  "id": "prime-factors;returns-a-prime-number",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I generate the prime factors of \u003cprime\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "it returns list \u003cprime\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "prime-factors;returns-a-prime-number;",
  "rows": [
    {
      "cells": [
        "prime"
      ],
      "line": 12,
      "id": "prime-factors;returns-a-prime-number;;1"
    },
    {
      "cells": [
        "2"
      ],
      "line": 13,
      "id": "prime-factors;returns-a-prime-number;;2"
    },
    {
      "cells": [
        "3"
      ],
      "line": 14,
      "id": "prime-factors;returns-a-prime-number;;3"
    },
    {
      "cells": [
        "7"
      ],
      "line": 15,
      "id": "prime-factors;returns-a-prime-number;;4"
    },
    {
      "cells": [
        "23"
      ],
      "line": 16,
      "id": "prime-factors;returns-a-prime-number;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Returns a prime number",
  "description": "",
  "id": "prime-factors;returns-a-prime-number;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I generate the prime factors of 2",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "it returns list 2",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 32
    }
  ],
  "location": "Steps.iGenerateThePrimeFactorsOf(int)"
});
formatter.result({
  "duration": 133967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "Steps.itReturnsList(Integer\u003e)"
});
formatter.result({
  "duration": 262658,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Returns a prime number",
  "description": "",
  "id": "prime-factors;returns-a-prime-number;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I generate the prime factors of 3",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "it returns list 3",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 32
    }
  ],
  "location": "Steps.iGenerateThePrimeFactorsOf(int)"
});
formatter.result({
  "duration": 150111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "Steps.itReturnsList(Integer\u003e)"
});
formatter.result({
  "duration": 123772,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Returns a prime number",
  "description": "",
  "id": "prime-factors;returns-a-prime-number;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I generate the prime factors of 7",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "it returns list 7",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 32
    }
  ],
  "location": "Steps.iGenerateThePrimeFactorsOf(int)"
});
formatter.result({
  "duration": 125168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 16
    }
  ],
  "location": "Steps.itReturnsList(Integer\u003e)"
});
formatter.result({
  "duration": 171379,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Returns a prime number",
  "description": "",
  "id": "prime-factors;returns-a-prime-number;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I generate the prime factors of 23",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "it returns list 23",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 32
    }
  ],
  "location": "Steps.iGenerateThePrimeFactorsOf(int)"
});
formatter.result({
  "duration": 1000115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 16
    }
  ],
  "location": "Steps.itReturnsList(Integer\u003e)"
});
formatter.result({
  "duration": 245031,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Returns two or more prime factors",
  "description": "",
  "id": "prime-factors;returns-two-or-more-prime-factors",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I generate the prime factors of \u003cnon-prime\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "it returns list \u003cfactors\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "prime-factors;returns-two-or-more-prime-factors;",
  "rows": [
    {
      "cells": [
        "non-prime",
        "factors"
      ],
      "line": 23,
      "id": "prime-factors;returns-two-or-more-prime-factors;;1"
    },
    {
      "cells": [
        "4",
        "2, 2"
      ],
      "line": 24,
      "id": "prime-factors;returns-two-or-more-prime-factors;;2"
    },
    {
      "cells": [
        "6",
        "2, 3"
      ],
      "line": 25,
      "id": "prime-factors;returns-two-or-more-prime-factors;;3"
    },
    {
      "cells": [
        "8",
        "2, 2, 2"
      ],
      "line": 26,
      "id": "prime-factors;returns-two-or-more-prime-factors;;4"
    },
    {
      "cells": [
        "9",
        "3, 3"
      ],
      "line": 27,
      "id": "prime-factors;returns-two-or-more-prime-factors;;5"
    },
    {
      "cells": [
        "49",
        "7, 7"
      ],
      "line": 28,
      "id": "prime-factors;returns-two-or-more-prime-factors;;6"
    },
    {
      "cells": [
        "99",
        "3, 3, 11"
      ],
      "line": 29,
      "id": "prime-factors;returns-two-or-more-prime-factors;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Returns two or more prime factors",
  "description": "",
  "id": "prime-factors;returns-two-or-more-prime-factors;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I generate the prime factors of 4",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "it returns list 2, 2",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 32
    }
  ],
  "location": "Steps.iGenerateThePrimeFactorsOf(int)"
});
formatter.result({
  "duration": 127138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2, 2",
      "offset": 16
    }
  ],
  "location": "Steps.itReturnsList(Integer\u003e)"
});
formatter.result({
  "duration": 104497,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Returns two or more prime factors",
  "description": "",
  "id": "prime-factors;returns-two-or-more-prime-factors;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I generate the prime factors of 6",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "it returns list 2, 3",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 32
    }
  ],
  "location": "Steps.iGenerateThePrimeFactorsOf(int)"
});
formatter.result({
  "duration": 177592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2, 3",
      "offset": 16
    }
  ],
  "location": "Steps.itReturnsList(Integer\u003e)"
});
formatter.result({
  "duration": 1404852,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Returns two or more prime factors",
  "description": "",
  "id": "prime-factors;returns-two-or-more-prime-factors;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I generate the prime factors of 8",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "it returns list 2, 2, 2",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 32
    }
  ],
  "location": "Steps.iGenerateThePrimeFactorsOf(int)"
});
formatter.result({
  "duration": 142686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2, 2, 2",
      "offset": 16
    }
  ],
  "location": "Steps.itReturnsList(Integer\u003e)"
});
formatter.result({
  "duration": 201610,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Returns two or more prime factors",
  "description": "",
  "id": "prime-factors;returns-two-or-more-prime-factors;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I generate the prime factors of 9",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "it returns list 3, 3",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 32
    }
  ],
  "location": "Steps.iGenerateThePrimeFactorsOf(int)"
});
formatter.result({
  "duration": 141144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3, 3",
      "offset": 16
    }
  ],
  "location": "Steps.itReturnsList(Integer\u003e)"
});
formatter.result({
  "duration": 2154734,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Returns two or more prime factors",
  "description": "",
  "id": "prime-factors;returns-two-or-more-prime-factors;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I generate the prime factors of 49",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "it returns list 7, 7",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "49",
      "offset": 32
    }
  ],
  "location": "Steps.iGenerateThePrimeFactorsOf(int)"
});
formatter.result({
  "duration": 400116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7, 7",
      "offset": 16
    }
  ],
  "location": "Steps.itReturnsList(Integer\u003e)"
});
formatter.result({
  "duration": 289710,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Returns two or more prime factors",
  "description": "",
  "id": "prime-factors;returns-two-or-more-prime-factors;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I generate the prime factors of 99",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "it returns list 3, 3, 11",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "99",
      "offset": 32
    }
  ],
  "location": "Steps.iGenerateThePrimeFactorsOf(int)"
});
formatter.result({
  "duration": 130455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3, 3, 11",
      "offset": 16
    }
  ],
  "location": "Steps.itReturnsList(Integer\u003e)"
});
formatter.result({
  "duration": 165945,
  "status": "passed"
});
});