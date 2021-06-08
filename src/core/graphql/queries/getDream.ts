import { gql } from 'graphql-request';

export const GET_DREAM = gql`
  query GET_DREAMS($id: ID!) {
    dream(id: $id) {
      title
      shortDescription
      image {
        url
      }
    }
  }
`;
