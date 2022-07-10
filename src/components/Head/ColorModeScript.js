export const ColorModeScript = () => (
  <>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          const mode = localStorage.getItem('colorMode');
          document.documentElement.setAttribute('colorMode', mode ? mode : "light");`,
      }}
    />
  </>
);
