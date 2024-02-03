import { GraphQLClient } from "graphql-request";

const url = "https://benioulid.stepzen.net/api/morbid-opossum/__graphql";

const apiKey = process.env.EXPO_PUBLIC_GRAPHQL_API_KEY;

const client = new GraphQLClient(url, {
  headers: {
    Authorization:
      `apikey ${apiKey}`,
  },
});

export default client;