declare module "@eslint/js" {
  import type { Linter } from "eslint";

  export const configs: {
    readonly recommended: { readonly rules: Readonly<Linter.RulesRecord> };
    readonly all: { readonly rules: Readonly<Linter.RulesRecord> };
  };
}
