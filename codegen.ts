import { CodegenConfig } from "@graphql-codegen/cli";

const graphuri = process.env.GRAPHQL_ENDPOINT as string;

const config: CodegenConfig = {
  schema: {
    [graphuri]: {
      authorization: `Bearer 123`,
    },
  },
  documents: ["features/**/*.graphql.ts"],
  generates: {
    "features/urql/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-urql"],
      config: { withHooks: true },
    },
  },
};

export default config;
