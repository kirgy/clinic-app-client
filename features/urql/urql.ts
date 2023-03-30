import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
} from "urql";
import environment from "../../constants/environment";

export const urqlClient = createClient({
  url: environment.GRAPHQL_ENDPOINT,
  exchanges: [dedupExchange, cacheExchange, fetchExchange],
});
