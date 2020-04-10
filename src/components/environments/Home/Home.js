import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import InstagramImage1 from '../../../images/png/instagram_image1.jpg';
import InstagramImage2 from '../../../images/png/instagram_image2.jpg';
import Me from '../../../images/png/me.png';
import backgroundimage from '../../../images/svg/background.svg';
import Background from '../../_atoms/BackgroundContainer';
import { Card, CardContent, CardFooter } from '../../_atoms/Card';
import Heading from '../../_atoms/Heading';
import { ResponsiveDivider, ResponsiveElement } from '../../_atoms/ResponsiveDividers';
import ResponsiveWrapper from '../../_atoms/ResponsiveWrapper';
import withText from '../../_atoms/Text';
import PhysicsIcons from '../../_organisms/PhysicsIcons';
import SocialIcons from '../../_organisms/SocialIcons';

import style from './Home.css';

const Home = ({ Text }) => (
  <Background image={backgroundimage}>
    <Helmet>
      <title>{`${Text.get('HeadTitle')}`}</title>
    </Helmet>
    <ResponsiveWrapper>
      <ResponsiveDivider>
        <ResponsiveElement width={2}>
          <div className={style.bannerText}>
            <Heading>
              <Text path="Title" />
            </Heading>
            <Heading level={2}>
              <Text path="SubTitle" />
            </Heading>
          </div>
        </ResponsiveElement>
        <center>
          <img className={style.titleImage} src={Me} alt="" width={250} height={250} />
        </center>
      </ResponsiveDivider>
      <Card>
        <CardContent>
          <ResponsiveDivider>
            <ResponsiveElement>
              <Heading level={4}>
                <Text path="IntroCard.Programming.Title" />
              </Heading>
              <p className={style.threeSubTitle}>
                <Text path="IntroCard.Programming.Body" />
              </p>
            </ResponsiveElement>
            <ResponsiveElement>
              <Heading level={4}>
                <Text path="IntroCard.Physics.Title" />
              </Heading>
              <p className={style.threeSubTitle}>
                <Text path="IntroCard.Physics.Body" />
              </p>
            </ResponsiveElement>
            <ResponsiveElement>
              <Heading level={4}>
                <Text path="IntroCard.More.Title" />
              </Heading>
              <p className={style.threeSubTitle}>
                <Text path="IntroCard.More.Body" />
              </p>
            </ResponsiveElement>
          </ResponsiveDivider>
        </CardContent>
        <CardFooter>
          <div className={style.followText}>
            <Text path="IntroCard.FooterText" />
          </div>
          <SocialIcons />
        </CardFooter>
      </Card>
      <Card>
        <CardContent>
          <Heading level={2} center>
            <Text path="PhysicsCard.Title" />
          </Heading>
          <ResponsiveDivider>
            <ResponsiveElement>
              <p className={style.subTitle}>
                <Text path="PhysicsCard.SubTitle" />
              </p>
            </ResponsiveElement>
          </ResponsiveDivider>
          <PhysicsIcons />
        </CardContent>
        <CardFooter>
          <Text path="PhysicsCard.FooterText" />
        </CardFooter>
      </Card>
      <Card>
        <CardContent>
          <Heading level={2} center>
            <Text path="BlogCard.Title" />
          </Heading>
          <ResponsiveDivider>
            <ResponsiveElement>
              <p className={style.subTitle}>
                <Text path="BlogCard.SubTitle" />
              </p>
            </ResponsiveElement>
          </ResponsiveDivider>
          <ResponsiveDivider>
            <ResponsiveElement>
              <div className={style.alignCenter}>
                <img className={style.blogImage} src={InstagramImage2} alt="" />
              </div>
            </ResponsiveElement>
            <ResponsiveElement>
              <div className={style.alignCenter}>
                <img className={style.blogImage} src={InstagramImage1} alt="" />
              </div>
            </ResponsiveElement>
          </ResponsiveDivider>
        </CardContent>
      </Card>
    </ResponsiveWrapper>
  </Background>
);

Home.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('Home')(Home);
