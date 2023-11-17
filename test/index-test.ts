import TextlintTester from "textlint-tester";
import rule from "../src/index";

const tester = new TextlintTester();

tester.run("textlint-rule-table-align", rule, {
  valid: [
    `
| foo | bar |
| --- | --- |
| 111 | 222 |
`,
    {
      text: `
| foo | bar |
| :-- | :-- |
| 111 | 222 |
`,
      options: {
        align: "left",
      },
    },
    {
      text: `
| foo | bar |
| --: | --: |
| 111 | 222 |
`,
      options: {
        align: "right",
      },
    },
    {
      text: `
| foo  | bar  |
| :--: | :--: |
| 111  | 222  |
`,
      options: {
        align: "center",
      },
    },
    {
      text: `
| foo | bar |
| --- | --- |
| 111 | 222 |
`,
      options: {
        align: null,
      },
    },
  ],
  invalid: [
    {
      text: `
| foo | bar |
| :-- | :-- |
| 111 | 222 |
`,
      errors: [
        {
          message: 'Prefer "null" alignment at table.',
          line: 2,
          column: 1,
        },
      ],
    },
    {
      text: `
| foo | bar |
| --- | --- |
| 111 | 222 |
`,
      options: {
        align: "center",
      },
      errors: [
        {
          message: 'Prefer "center" alignment at table.',
          line: 2,
          column: 1,
        },
      ],
    },
    {
      text: `
| foo | bar |
| :-- | :-- |
| 111 | 222 |
`,
      options: {
        align: "center",
      },
      errors: [
        {
          message: 'Prefer "center" alignment at table.',
          line: 2,
          column: 1,
        },
      ],
    },
  ],
});
