import Head from "next/head";

export const CommonMetaTags = () => (
  <Head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1"
    />
    <meta property="og:type" content="website" />
    <meta name="theme-color" content="#ffca1e"></meta>
    <meta name="twitter:creator" content="@dannywrayuk" />
  </Head>
);

export const MetaTags = ({ meta = {}, children }) => {
  const pageTitle = meta.title ? meta.title + " | Danny Wray" : "Danny Wray";
  const description =
    meta.abstract ||
    "My personal website. I focus on software development and physics, but I post about pretty much anything.";
  const cardImage =
    "https://dannywray.co.uk" + (meta.image || "/defaultcard.jpg");
  const cardType = meta.image ? "summary_large_image" : "summary";
  const siteUrl = "https://dannywray.co.uk" + (meta.route || "");
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />
      <meta name="description" content={description} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content={cardType} />
      <meta property="og:image" content={cardImage} />
      <meta property="og:url" content={siteUrl} />
      <link rel="canonical" href={siteUrl}></link>
      {children}
    </Head>
  );
};
