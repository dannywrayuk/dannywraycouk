import packageJson from "../package.json";
export default {
  Logo: {
    Line1: "Danny",
    Line2: "Wray",
    Line3: ".co.uk",
  },
  Landing: {
    Greeting: {
      Line1: "I’m Danny,",
      Line2: "a software developer and physics graduate.",
    },
    Navigation: {
      Option1: "Thoughts",
      Option2: "Projects",
      Option3: "About me",
      Option4: "Links",
    },
    FeaturedSection: "Featured",
  },
  Footer: {
    CopyrightText: `Danny Wray ${new Date().getFullYear()}`,
    Version: `v${packageJson.version}`,
  },
};
