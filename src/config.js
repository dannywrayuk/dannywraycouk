import packagejson from "../package.json";
export default {
  Text: {
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
        Menu: "Menu",
        Option1: { Text: "Thoughts", Link: "/thoughts" },
        Option2: { Text: "Projects", Link: "/projects" },
        Option3: { Text: "About Me", Link: "/about-me" },
        Option4: { Text: "Links", Link: "/links" },
      },
      FeaturedSection: "Featured",
    },
    Contents: {
      SeeMore: "See More",
      ReadMore: "Read More",
    },
    Footer: {
      CopyrightText: `Danny Wray ${new Date().getFullYear()}`,
    },
  },
  Theme: {
    Colours: {
      PRIMARY1: "#FFCA1E",
      PRIMARY2: "#0a0a0a",
      PRIMARY3: "#FFFFFF",
      SECONDARY1: "#1D1D1D",
      TERTIARY1: "#2a2a2a",
    },
    Breakpoints: {
      OnMediumUp: "(min-width: 900px)",
      OnLargeUp: "(min-width: 2000px)",
      OnSmallDown: "(max-width: 330px)",
    },
  },
  Head: {
    StandardTitle: "Danny Wray",
  },
  Links: {
    Github: "https://github.com/dannywrayuk",
    Linkedin: "https://www.linkedin.com/in/dannywrayuk/",
    Twitter: "https://twitter.com/dannywrayuk",
  },
  FeaturedPosts: ["test", "thoughts/test2"],
  MaxContentsItems: 2,
  LogoShrinkThreshold: {
    Distance: 100,
    Width: 700,
  },
  Version: `v${packagejson.version}`,
};
