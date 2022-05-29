export const GoogleAnalytics = () => {
  if (process.env.NODE_ENV === "development") return null;
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-TC3WVHZ3S7"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TC3WVHZ3S7');`,
        }}
      />
    </>
  );
};
