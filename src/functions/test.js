import { GraphQLClient } from 'graphql-request';

const gqlClient = new GraphQLClient(process.env.REACT_APP_HASURA_GRAPHQL_URL, {
  headers: {
    'X-Hasura-Access-Key': process.env.REACT_APP_HASURA_GRAPHQL_ACCESS_KEY
  }
});

export default gqlClient;
