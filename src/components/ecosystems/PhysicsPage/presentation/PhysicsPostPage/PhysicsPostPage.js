import React from 'react';
import PropTypes from 'prop-types';

import backgroundimage from '../../../../../images/svg/background.svg';
import Background from '../../../../_atoms/BackgroundContainer';
import FetchMarkdown from '../../../../_molecules/FetchMarkdown';
import { ResponsiveDivider } from '../../../../_molecules/ResponsiveDividers';
import ResponsiveWrapper from '../../../../_molecules/ResponsiveWrapper';
import { Card, CardContent } from '../../../../_organisms/Card';
import * as Images from './content/Images';
import * as Posts from './content/Posts';

import postStyle from './content/styles.css';

const PhysicsPostPage = (props) => {
  const { match: { params: { post } } } = props;
  return (
    <Background image={backgroundimage}>
      <ResponsiveWrapper>
        <Card topper>
          <CardContent>
            <ResponsiveDivider>
              <FetchMarkdown
                containerName={postStyle.contentContainer}
                location={Posts[post]}
                auxData={Images}
                styleData={postStyle}
              />
            </ResponsiveDivider>
          </CardContent>
        </Card>
      </ResponsiveWrapper>
    </Background>
  );
};


PhysicsPostPage.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
};

PhysicsPostPage.defaultProps = {
  match: {},
  params: {},
};

export default PhysicsPostPage;
