export const toggleColourMode = () => {
  const html = document.documentElement;
  if (html.getAttribute("colorMode") === "light") {
    localStorage.setItem("colorMode", "dark");
    html.setAttribute("colorMode", "dark");
  } else {
    localStorage.setItem("colorMode", "light");
    html.setAttribute("colorMode", "light");
  }
};
