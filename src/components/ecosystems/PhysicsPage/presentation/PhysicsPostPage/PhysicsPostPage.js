import React from 'react';
import PropTypes from 'prop-types';

import backgroundimage from '../../../../../images/svg/background.svg';
import * as Posts from '../../../../../text/Physics/Posts.js';
import Background from '../../../../_atoms/BackgroundContainer';
import FetchMarkdown from '../../../../_molecules/FetchMarkdown';
import { ResponsiveDivider, ResponsiveElement } from '../../../../_molecules/ResponsiveDividers';
import ResponsiveWrapper from '../../../../_molecules/ResponsiveWrapper';
import { Card, CardContent } from '../../../../_organisms/Card';

import style from './PhysicsPostPage.css';

const PhysicsPostPage = (props) => {
  const { match: { params: { post } } } = props;
  return (
    <Background image={backgroundimage}>
      <ResponsiveWrapper>
        <Card topper>
          <CardContent>
            <ResponsiveDivider>
              <ResponsiveElement>
                <FetchMarkdown containerName={style.contentContainer} location={Posts[post]} />
              </ResponsiveElement>
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
