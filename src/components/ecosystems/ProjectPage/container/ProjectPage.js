import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import AppConstants from '../../../../utilities/AppConstants';
import ProjectPageMain from '../presentation/ProjectPageMain';


const ProjectPage = (props) => {
  const { stage } = props;
  const { STAGES } = AppConstants.Blog;
  const stageSelector = {
    [STAGES.MAIN]: <ProjectPageMain {...props} />,
    [STAGES.ERROR]: <ProjectPageMain {...props} />,
  };
  return stageSelector[stage] || stageSelector[STAGES.ERROR];
};

ProjectPage.propTypes = {
  stage: propTypes.string.isRequired,
};

const mapStateToProps = ({ CoreStage }) => ({
  stage: CoreStage.ProjectPage,
});

export default connect(mapStateToProps)(ProjectPage);
