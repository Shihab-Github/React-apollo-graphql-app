import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphqlpokemon.favware.tech/",
  cache: new InMemoryCache(),
});

export const watchList = makeVar([])
export default client;
