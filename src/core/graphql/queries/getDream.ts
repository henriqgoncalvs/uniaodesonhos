import { gql } from 'graphql-request';

export const GET_DREAM = gql`
  query GET_DREAM($id: ID!) {
    dream(id: $id) {
      id
      title
      shortDescription
      image {
        url
      }
      donation {
        url
        value
      }
      fullDescription
      peopleDreaming
      startDate
      endDate
      totalValue
      collectedValue
      companies {
        title
      }
    }
  }
`;
