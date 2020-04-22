import styled from 'styled-components';

import { ReactComponent as gitHub } from '../../../images/svg/github.svg';
import { ReactComponent as instagram } from '../../../images/svg/instagram.svg';
import { ReactComponent as linkedIn } from '../../../images/svg/linkedin.svg';
import { ReactComponent as spotify } from '../../../images/svg/spotify.svg';
import { ReactComponent as twitter } from '../../../images/svg/twitter.svg';
import AnchorButton from '../../_molecules/AnchorButton';

export const FollowText = styled(AnchorButton)`
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
`;

const icon = (image) => styled(image)`
  display: inline-flex;
  justify-content: center;
  margin-left: 15px;
  width: 20px;
  height: 20px;
`;

export const Twitter = icon(twitter);
export const Spotify = icon(spotify);
export const LinkedIn = icon(linkedIn);
export const Instagram = icon(instagram);
export const GitHub = icon(gitHub);
