const AppConstants = {
  ROUTES: {
    BASE: '/',
    BLOG: '/blog',
    PHYSICS: '/physics',
    PHYSICS_SECTION: '/physics/:catagory',
    PHYSICS_POST: '/physics/:catagory/:section/:post',
    PROJECTS: '/projects',
    MORE: '/more',
    SEARCH_TERM: '/search/:term',
    SEARCH_BLANK: '/search',
    ERROR: '/error',
  },
  Physics: {
    CATAGORIES: {
      QUANTUM: '/physics/quantum',
      THERMAL: '/physics/thermal',
      CLASSICAL: '/physics/classical',
      ELECTROMAG: '/physics/electromag',
      ASTRO: '/physics/astro',
      MATHS: '/physics/maths',
    },
  },
  SiteColor: '#FFCA1E',
  TwitterLink: 'https://twitter.com/dannywrayuk',
  InstagramLink: 'https://www.instagram.com/dannywrayuk/',
  LinkedInLink: 'https://www.linkedin.com/in/dannywrayuk/',
  SpotifyLink: 'https://open.spotify.com/user/sciencekidd97',
  GitHubLink: 'https://github.com/dannywrayuk',
  version: `v${process.env.REACT_APP_VERSION}`,
};
export default AppConstants;
