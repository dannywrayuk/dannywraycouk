import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  min-width: 270px;
  transition: 0.2s;
  justify-content: center;

  &:hover{
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  min-width: 170px;
`;

export const SubTitle = styled.div`
  color: grey;
`;
