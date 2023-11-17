import type { TextlintRuleModule, TextlintRuleReporter } from "@textlint/types";

interface Options {
  align?: "left" | "right" | "center" | null;
}

const reporter: TextlintRuleReporter<Options> = (context, options = {}) => {
  const { RuleError, Syntax, report } = context;

  const preferAlign = options.align ?? null;

  return {
    [Syntax.Table](node) {
      if (node.align === null || node.align === undefined) {
        return;
      }

      const valid = node.align.every((alignType) => alignType === preferAlign);

      if (!valid) {
        const ruleError = new RuleError(
          `Prefer "${preferAlign}" alignment at table.`,
        );
        report(node, ruleError);
      }
    },
  };
};

const rule: TextlintRuleModule<Options> = reporter;

export default rule;
