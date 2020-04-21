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
import {
  AlignCenter,
  BannerText,
  BlogImage,
  FollowText,
  SubTitle,
  ThreeSubTitle,
  TitleImage,
} from './Home.style';

const Home = ({ Text }) => (
  <Background image={backgroundimage}>
    <Helmet>
      <title>{`${Text.get('HeadTitle')}`}</title>
    </Helmet>
    <ResponsiveWrapper>
      <ResponsiveDivider>
        <ResponsiveElement width={2}>
          <BannerText>
            <Heading>
              <Text path="Title" />
            </Heading>
            <Heading level={2}>
              <Text path="SubTitle" />
            </Heading>
          </BannerText>
        </ResponsiveElement>
        <AlignCenter>
          <TitleImage src={Me} alt="" />
        </AlignCenter>
      </ResponsiveDivider>
      <Card>
        <CardContent>
          <ResponsiveDivider>
            <ResponsiveElement>
              <Heading level={4}>
                <Text path="IntroCard.Programming.Title" />
              </Heading>
              <ThreeSubTitle>
                <Text path="IntroCard.Programming.Body" />
              </ThreeSubTitle>
            </ResponsiveElement>
            <ResponsiveElement>
              <Heading level={4}>
                <Text path="IntroCard.Physics.Title" />
              </Heading>
              <ThreeSubTitle>
                <Text path="IntroCard.Physics.Body" />
              </ThreeSubTitle>
            </ResponsiveElement>
            <ResponsiveElement>
              <Heading level={4}>
                <Text path="IntroCard.More.Title" />
              </Heading>
              <ThreeSubTitle>
                <Text path="IntroCard.More.Body" />
              </ThreeSubTitle>
            </ResponsiveElement>
          </ResponsiveDivider>
        </CardContent>
        <CardFooter>
          <FollowText>
            <Text path="IntroCard.FooterText" />
          </FollowText>
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
              <SubTitle>
                <Text path="PhysicsCard.SubTitle" />
              </SubTitle>
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
              <SubTitle>
                <Text path="BlogCard.SubTitle" />
              </SubTitle>
            </ResponsiveElement>
          </ResponsiveDivider>
          <ResponsiveDivider>
            <ResponsiveElement>
              <AlignCenter>
                <BlogImage src={InstagramImage2} alt="" />
              </AlignCenter>
            </ResponsiveElement>
            <ResponsiveElement>
              <AlignCenter>
                <BlogImage src={InstagramImage1} alt="" />
              </AlignCenter>
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
