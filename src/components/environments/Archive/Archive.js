import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';

import backgroundimage from '../../../images/svg/background.svg';
import Posts from '../../../text/Posts/Contents.json';
import AppConstants from '../../../utilities/AppConstants';
import Background from '../../_atoms/BackgroundContainer';
import { Card, CardContent } from '../../_atoms/Card';
import { ResponsiveDivider, ResponsiveElement } from '../../_atoms/ResponsiveDividers';
import ResponsiveWrapper from '../../_atoms/ResponsiveWrapper';
import withText from '../../_atoms/Text';
import PageBar from '../../_organisms/PageBar';
import PostList from '../../_organisms/PostList';
import BigTitle from '../../styled/BigTitle';
import Paragraph from '../../styled/Paragraph';

const { LINKS } = AppConstants;

const Archive = ({ Text, match }) => {
  const history = useHistory();
  let { params: { page } } = match;
  page = page - 1 || 0;

  const ItemsPerPage = 5;
  const firstItem = ItemsPerPage * (page);
  const numItems = Posts.length;
  return (
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
                <PostList structure={Posts} max={ItemsPerPage} start={firstItem} />
              </ResponsiveElement>
            </ResponsiveDivider>
            <PageBar
              hidePrev={firstItem < 1}
              hideNext={firstItem + ItemsPerPage >= numItems}
              onPrevClick={() => { history.push(`${LINKS.ARCHIVE}/${String(page)}`); }}
              onNextClick={() => {
                history.push(`${LINKS.ARCHIVE}/${String(page + 2)}`);
              }}
              pageNum={page + 1}
            />
          </CardContent>
        </Card>
      </ResponsiveWrapper>
    </Background>
  );
};

Archive.propTypes = {
  Text: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

export default withText('Archive')(Archive);
