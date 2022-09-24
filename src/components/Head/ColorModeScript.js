export const ColorModeScript = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
          const manual = localStorage.getItem('colorMode');
          const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
          const mode = manual ? manual : (preference ? "dark" : "light" );
          document.documentElement.setAttribute('colorMode', mode);`,
    }}
  />
);
