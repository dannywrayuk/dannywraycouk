import React from 'react';
import PropTypes from 'prop-types';

import backgroundimage from '../../../../../images/svg/background.svg';
import contents from '../../../../../text/Physics/Contents.json';
import Background from '../../../../_atoms/BackgroundContainer';
import { ResponsiveDivider } from '../../../../_atoms/ResponsiveDividers';
import ResponsiveWrapper from '../../../../_atoms/ResponsiveWrapper';
import FetchMarkdown from '../../../../_molecules/FetchMarkdown';
import Heading from '../../../../_molecules/Heading';
import { Card, CardContent } from '../../../../_organisms/Card';
import * as Images from './content/Images';
import * as Posts from './content/Posts';

import postStyle from './content/styles.css';
import style from './PhysicsPost.css';

const PhysicsPost = ({ catagory, section, post }) => {
  const { title, date, description } = contents[catagory][section].posts[post];
  return (
    <Background image={backgroundimage}>
      <ResponsiveWrapper>
        <Card topper>
          <CardContent>
            <ResponsiveDivider>
              <div className={style.wrapper}>
                <div className={style.wrapper}>
                  <Heading className={style.center} level={2}>
                    {title}
                  </Heading>
                  <p className={style.date}>{date || ''}</p>
                  <p className={style.center}>{description || ''}</p>
                  <hr className={style.ruler} />
                </div>
                <FetchMarkdown
                  containerName={postStyle.contentContainer}
                  location={Posts[post]}
                  auxData={Images}
                  styleData={postStyle}
                />
              </div>
            </ResponsiveDivider>
          </CardContent>
        </Card>
      </ResponsiveWrapper>
    </Background>
  );
};


PhysicsPost.propTypes = {
  catagory: PropTypes.string,
  section: PropTypes.string,
  post: PropTypes.string,
};

PhysicsPost.defaultProps = {
  catagory: '',
  section: '',
  post: '',
};

export default PhysicsPost;
