import React from 'react';
import propTypes from 'prop-types';
import AppConstants from '../../../../utilities/AppConstants';
import BlogPageMain from '../presentation/BlogPageMain';

const BlogPage = (props) => {
  const { stage } = props;
  const { STAGES } = AppConstants.Blog;
  const stageSelector = {
    [STAGES.MAIN]: <BlogPageMain {...props} />,
    [STAGES.ERROR]: <BlogPageMain {...props} />,
  };
  return stageSelector[stage] || stageSelector[STAGES.ERROR];
};

BlogPage.propTypes = {
  stage: propTypes.string.isRequired,
};

export default BlogPage;
