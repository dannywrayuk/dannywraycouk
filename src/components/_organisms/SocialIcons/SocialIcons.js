import React from 'react';

import AppConstants from '../../../utilities/AppConstants';
import {
  FollowText,
  GitHub,
  Instagram,
  LinkedIn,
  Spotify,
  Twitter,
} from './SocialIcons.style';

const SocialIcons = () => (
  <>
    <FollowText to={AppConstants.TwitterLink}>
      <Twitter />
    </FollowText>
    <FollowText to={AppConstants.InstagramLink}>
      <Instagram />
    </FollowText>
    <FollowText to={AppConstants.LinkedInLink}>
      <LinkedIn />
    </FollowText>
    <FollowText to={AppConstants.SpotifyLink}>
      <Spotify />
    </FollowText>
    <FollowText to={AppConstants.GitHubLink}>
      <GitHub />
    </FollowText>
  </>
);

export default SocialIcons;
