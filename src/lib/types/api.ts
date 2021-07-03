export type BannerProps = {
  logo: {
    image: {
      url: string;
    };
    alternativeText: string;
  };
  title: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  bannerImage: {
    url: string;
  };
};

export type AboutProps = {
  companyAbout: {
    title: string;
    description: string;
    image: {
      url: string;
    };
  };
  pillar_abouts: [
    {
      text: string;
    },
  ];
  company_abouts: [
    {
      title: string;
      description: string;
      logo: [
        {
          url: string;
        },
      ];
    },
  ];
};

export type DreamsBeingDreamedProps = {
  title: string;
  dreams: [
    {
      id: number;
      thumbnail: {
        url: string;
      };
      title: string;
      shortDescription: string;
      companies: [
        {
          title: string;
        },
      ];
      dream_categories: [
        {
          text: string;
        },
      ];
    },
  ];
};

export type MapProps = {
  title: string;
  mapImage: {
    url: string;
  };
  mapNumbers: [
    {
      number: number;
      description: string;
    },
  ];
};

export type CompaniesDreamingTogetherProps = {
  title: string;
  companyCategory: [
    {
      title: string;
      companies: [
        {
          title: string;
          image: {
            url: string;
          };
        },
      ];
    },
  ];
  image: {
    url: string;
  };
};

export type LandingPageProps = {
  banner: BannerProps;
  about: AboutProps;
  dreamsBeingDreamed: DreamsBeingDreamedProps;
  map: MapProps;
  companiesDreamingTogether: CompaniesDreamingTogetherProps;
};

export type DreamProps = {
  id: string;
  title: string;
  shortDescription: string;
  thumbnail: {
    url: string;
  };
  presentationMedia: {
    url: string;
  };
  donation: [
    {
      url: string;
      value: number;
    },
  ];
  fullDescription: string;
  peopleDreaming: string;
  startDate: string;
  endDate: string;
  totalValue: number;
  collectedValue: number;
  companies: [
    {
      title: string;
    },
  ];
};

export type CompaniesProps = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
  url: string;
  dreams: Pick<DreamProps, 'id' | 'title' | 'thumbnail'>[];
};
