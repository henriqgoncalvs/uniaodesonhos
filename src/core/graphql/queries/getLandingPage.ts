import { gql } from 'graphql-request';

const GET_LANDING_PAGE = gql`
  fragment banner on LandingPage {
    banner {
      logo {
        image {
          url
        }
        alternativeText
      }
      title
      primaryButtonText
      secondaryButtonText
      bannerImage {
        url
      }
    }
  }

  fragment about on LandingPage {
    about {
      companyAbout {
        title
        description
        image {
          url
        }
      }
      pillar_abouts {
        text
      }
      company_abouts {
        title
        description
        logo {
          url
        }
      }
    }
  }

  fragment dreamsBeingDreamed on LandingPage {
    dreamsBeingDreamed {
      title
      dreams {
        id
        image {
          url
        }
        title
        shortDescription
        companies {
          title
        }
        dream_categories {
          text
        }
      }
    }
  }

  fragment map on LandingPage {
    map {
      title
      mapImage {
        url
      }
      mapNumbers {
        number
        description
      }
    }
  }

  fragment companiesDreamingTogether on LandingPage {
    companiesDreamingTogether {
      title
      companies {
        title
        image {
          url
        }
      }
      image {
        url
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...banner
      ...about
      ...dreamsBeingDreamed
      ...map
      ...companiesDreamingTogether
    }
  }
`;

export default GET_LANDING_PAGE;
