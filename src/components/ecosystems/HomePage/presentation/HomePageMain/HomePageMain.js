import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import InstagramImage1 from '../../../../../images/png/instagram_image1.jpg';
import InstagramImage2 from '../../../../../images/png/instagram_image2.jpg';
import Me from '../../../../../images/png/me.png';
import backgroundimage from '../../../../../images/svg/background.svg';
import { withText } from '../../../../../text/textStore';
import Background from '../../../../_atoms/BackgroundContainer';
import Heading from '../../../../_molecules/Heading';
import { ResponsiveDivider, ResponsiveElement } from '../../../../_molecules/ResponsiveDividers';
import ResponsiveWrapper from '../../../../_molecules/ResponsiveWrapper';
import SocialIcons from '../../../../_molecules/SocialIcons';
import { Card, CardContent, CardFooter } from '../../../../_organisms/Card';
import PhysicsIcons from '../../../../_organisms/PhysicsIcons';

import style from './HomePageMain.css';

const HomePageMain = ({ Text, Text: text }) => (
  <Background image={backgroundimage}>
    <Helmet>
      <title>{`${text({ path: 'HeadTitle' })}`}</title>
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
                <img src={InstagramImage2} alt="" width="300px" />
              </div>
            </ResponsiveElement>
            <ResponsiveElement>
              <div className={style.alignCenter}>
                <img src={InstagramImage1} alt="" width="300px" />
              </div>
            </ResponsiveElement>
          </ResponsiveDivider>
        </CardContent>
      </Card>
    </ResponsiveWrapper>
  </Background>
);

HomePageMain.propTypes = {
  Text: PropTypes.func.isRequired,
};

export default withText('HomePageMain')(HomePageMain);
