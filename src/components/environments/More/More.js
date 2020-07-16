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
import Socialicons from '../../_organisms/SocialIcons';
import BigTitle from '../../styled/BigTitle';
import Paragraph from '../../styled/Paragraph';
import { IconWrapper } from './More.style';

const More = ({ Text }) => (
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
          <IconWrapper>
            <Socialicons />
          </IconWrapper>
          <ResponsiveDivider>
            <ResponsiveElement>
              <PostList structure={Posts} filter="more" />
            </ResponsiveElement>
          </ResponsiveDivider>
        </CardContent>
      </Card>
    </ResponsiveWrapper>
  </Background>
);

More.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('More')(More);
