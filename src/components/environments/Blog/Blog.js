import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import backgroundimage from '../../../images/svg/background.svg';
import Posts from '../../../text/Posts/Contents.json';
import AppConstants from '../../../utilities/AppConstants';
import Background from '../../_atoms/BackgroundContainer';
import { Card, CardContent } from '../../_atoms/Card';
import { ResponsiveDivider, ResponsiveElement } from '../../_atoms/ResponsiveDividers';
import ResponsiveWrapper from '../../_atoms/ResponsiveWrapper';
import withText from '../../_atoms/Text';
import PostList from '../../_organisms/PostList';
import AlignCenter from '../../styled/AlignCenter';
import BigTitle from '../../styled/BigTitle';
import Paragraph from '../../styled/Paragraph';
import { ArchiveLink, ArchiveText } from './Blog.style';

const { LINKS } = AppConstants;

const Blog = ({ Text }) => (
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
              <PostList structure={Posts} filter="blog" />
            </ResponsiveElement>
          </ResponsiveDivider>
          <ResponsiveDivider>
            <ResponsiveElement>
              <Paragraph center>
                <Text path="UnderCard" />
              </Paragraph>
              <AlignCenter>
                <ArchiveLink to={LINKS.ARCHIVE}>
                  <ArchiveText>
                    <Text path="ArchiveLinkText" />
                  </ArchiveText>
                </ArchiveLink>
              </AlignCenter>
            </ResponsiveElement>
          </ResponsiveDivider>
        </CardContent>
      </Card>
    </ResponsiveWrapper>
  </Background>
);

Blog.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Blog')(Blog);
