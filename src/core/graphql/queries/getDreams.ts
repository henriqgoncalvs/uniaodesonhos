import { gql } from 'graphql-request';

export const GET_DREAMS = gql`
  query GET_DREAMS {
    dreams {
      id
    }
  }
`;
