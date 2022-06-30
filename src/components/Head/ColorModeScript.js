export const ColorModeScript = () => (
  <>
    <link href="/globals.css" rel="stylesheet" />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          const mode = localStorage.getItem('colorMode');
          document.documentElement.setAttribute('colorMode', mode ? mode : "light");`,
      }}
    />
  </>
);
