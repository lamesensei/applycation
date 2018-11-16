import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(process.env.REACT_APP_HASURA_GRAPHQL_URL, {
    headers: {
        'X-Hasura-Access-Key': process.env.REACT_APP_HASURA_GRAPHQL_ACCESS_KEY
    }
});

const query = `{
  test {
    id
    name
  }
}`;

export const testQuery = client.request(query);
