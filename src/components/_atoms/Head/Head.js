import React from 'react';
import propTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import TextStore from '../../../text/SharedContent';
import AppConstants from '../../../utilities/AppConstants';

const Head = (props) => {
  const {
    title,
    description,
    keywords,
    author,
    color,
  } = props;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="theme-color" content={color} />
    </Helmet>
  );
};

Head.defaultProps = {
  title: TextStore.defaultTitle,
  description: TextStore.defaultDescription,
  keywords: TextStore.defaultKeywords,
  author: TextStore.defaultAuthor,
  color: AppConstants.SiteColor,
};

Head.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  keywords: propTypes.string,
  author: propTypes.string,
  color: propTypes.string,
};
export default Head;
