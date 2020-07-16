import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import backgroundimage from '../../../images/svg/background.svg';
import Posts from '../../../text/Posts/Contents.json';
import Background from '../../_atoms/BackgroundContainer';
import { Card, CardContent } from '../../_atoms/Card';
import { ResponsiveDivider, ResponsiveElement } from '../../_atoms/ResponsiveDividers';
import ResponsiveWrapper from '../../_atoms/ResponsiveWrapper';
import withText from '../../_atoms/Text';
import PostList from '../../_organisms/PostList';
import BigTitle from '../../styled/BigTitle';
import Paragraph from '../../styled/Paragraph';

const Project = ({ Text }) => (
  <Background image={backgroundimage}>
    <Helmet>
      <title>{`${Text.get('Title')}`}</title>
    </Helmet>
    <ResponsiveWrapper>
      <Card topper>
        <CardContent>
          <BigTitle center>
            <Text path="Heading" />
          </BigTitle>
          <ResponsiveDivider>
            <ResponsiveElement>
              <Paragraph center>
                <Text path="Body" />
              </Paragraph>
            </ResponsiveElement>
          </ResponsiveDivider>
          <ResponsiveDivider>
            <ResponsiveElement>
              <PostList structure={Posts} filter="project" />
            </ResponsiveElement>
          </ResponsiveDivider>
        </CardContent>
      </Card>
    </ResponsiveWrapper>
  </Background>
);

Project.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Project')(Project);
