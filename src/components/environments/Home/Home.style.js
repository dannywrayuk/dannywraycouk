import styled from 'styled-components';

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
  border-color: var(--MainYellow);
  border-width: 10px;
  border-style: solid;
  width: 250px;
  height: 250px; 
`;
