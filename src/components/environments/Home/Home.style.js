import styled from 'styled-components';

import AlignCenter from '../../styled/AlignCenter';

export const HeadingAlign = styled(AlignCenter)`
  margin: auto 0;
`;

export const CenterImage = styled.div`
  display: flex;
  justify-content: center;
`;

export const BlogImage = styled(CenterImage).attrs({
  as: 'img',
})`
  width: 100%;
  height: auto;
`;

export const TitleImage = styled.img`
  border-radius: 50%;
  border-color: ${({ theme }) => theme.colors.mainYellow};
  border-width: 10px;
  border-style: solid;
  width: 250px;
  height: 250px; 
`;
