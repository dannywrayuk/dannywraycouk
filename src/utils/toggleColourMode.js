export const toggleColourMode = () => {
  const html = document.documentElement;
  if (html.getAttribute("colorMode") === "light") {
    html.setAttribute("colorMode", "dark");
  } else {
    html.setAttribute("colorMode", "light");
  }
};
