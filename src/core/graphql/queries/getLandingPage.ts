import { gql } from 'graphql-request';

const GET_LANDING_PAGE = gql`
  query GET_LANDING_PAGE {
    landingPage {
      banner {
        logo {
          image {
            url
          }
          alternativeText
        }
        title
      }
    }
  }
`;

export default GET_LANDING_PAGE;
