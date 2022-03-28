const redirectList = {
  github: "https://github.com/dannywrayuk",
  linkedin: "https://www.linkedin.com/in/dannywrayuk/",
  twitter: "https://twitter.com/dannywrayuk",
  businesscard: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
};

const key = document.location.pathname.substring(1);
const redirect = redirectList[key];
if (redirect) {
  document.location.replace(redirect);
}
