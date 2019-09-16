import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = ({ CoreStage }) => ({
  stage: CoreStage.BlogPage,
});

export default connect(mapStateToProps)(BlogPage);
