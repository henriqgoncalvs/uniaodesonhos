import { gql } from 'graphql-request';

export const GET_COMPANIES = gql`
  query GET_COMPANIES {
    companies {
      id
      title
      description
      image {
        url
      }
      dreams {
        id
        title
        image {
          url
        }
      }
    }
  }
`;
