export type BannerProps = {
  logo: {
    image: {
      url: string;
    };
    alternativeText: string;
  };
  title: string;
};

export type LandingPageProps = {
  banner: BannerProps;
};
