import styled, { css } from 'styled-components';

import Button from '../../_molecules/Button';

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 10px;
    display: inline-flex;
    width: 100%;
    overflow: hidden;
`;
export const StyledButton = styled(Button)`
    background-color: ${({ theme }) => theme.colors.mainYellow};
    padding: 5px 15px;
    ${({ disabled }) => disabled && css`
        filter: saturate(0);
        opacity: 0.1;
    `}
`;

export const PageCounter = styled.div`
    flex-grow:1;
    text-align: center;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
`;
