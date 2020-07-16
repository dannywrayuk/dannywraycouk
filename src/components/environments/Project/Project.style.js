import styled from 'styled-components';

import LinkButton from '../../_molecules/LinkButton';
import Title from '../../styled/Title';

export const ArchiveLink = styled(LinkButton)`
    background-color: ${({ theme }) => theme.colors.accent};
    padding:15px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow};
    margin: 0 auto;
    margin-top: 30px;
`;

export const ArchiveText = styled(Title)`
    margin:0;
`;
