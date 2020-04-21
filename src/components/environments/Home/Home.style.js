import styled from 'styled-components';

export const AlignCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const TitleImage = styled.img`
  border-radius: 50%;
  border-color: var(--MainYellow);
  border-width: 10px;
  border-style: solid;
  width: 250px;
  height: 250px; 
`;

export const FollowText = styled.div`
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
`;

export const SubTitle = styled.div`
  text-align: center;
  line-height: 30px;
  margin: 0px auto;
  color: #333;
`;

export const ThreeSubTitle = styled.div`
  line-height: 30px;
  color: #333;
`;

export const BannerText = styled.div`
  margin: auto 0 auto;
`;

export const BlogImage = styled.img`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
`;
