import styled from 'styled-components';

export const Background = styled.div`
    height: 100%;
    background: ${({ image }) => `url(${image})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;
