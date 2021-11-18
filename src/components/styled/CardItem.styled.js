import styled from 'styled-components';

export const CardItem = styled.p`
    color: white;

    grid-area: ${({ gridArea }) => gridArea};
`;
