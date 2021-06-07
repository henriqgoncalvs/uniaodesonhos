import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(process.env.GRAPHQL_HOST || '', {
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
