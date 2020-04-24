import React from 'react';

import { ReactComponent as SvgGitHub } from '../../../images/svg/github.svg';
import { ReactComponent as SvgInstagram } from '../../../images/svg/instagram.svg';
import { ReactComponent as SvgLinkedIn } from '../../../images/svg/linkedin.svg';
import { ReactComponent as SvgSpotify } from '../../../images/svg/spotify.svg';
import { ReactComponent as SvgTwitter } from '../../../images/svg/twitter.svg';
import AppConstants from '../../../utilities/AppConstants';
import { FollowText, Icon } from './SocialIcons.style';

const SocialIcons = () => (
  <>
    <FollowText to={AppConstants.TwitterLink}>
      <Icon as={SvgTwitter} />
    </FollowText>
    <FollowText to={AppConstants.InstagramLink}>
      <Icon as={SvgInstagram} />
    </FollowText>
    <FollowText to={AppConstants.LinkedInLink}>
      <Icon as={SvgLinkedIn} />
    </FollowText>
    <FollowText to={AppConstants.SpotifyLink}>
      <Icon as={SvgSpotify} />
    </FollowText>
    <FollowText to={AppConstants.GitHubLink}>
      <Icon as={SvgGitHub} />
    </FollowText>
  </>
);

export default SocialIcons;
