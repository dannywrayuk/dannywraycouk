export const GoogleFonts = ({ fonts }) => {
  if (!fonts) return null;
  const fontString = Object.keys(fonts)
    .map((font, id) => {
      const queryParam = id === 0 ? "?" : "&";
      const weights = fonts[font].weights
        ? ":wght@" + fonts[font].weights.join(";")
        : "";
      return `${queryParam}family=${font}${weights}`;
    })
    .join("");
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href={`https://fonts.googleapis.com/css2${fontString}&display=swap`}
        rel="stylesheet"
      />
    </>
  );
};
