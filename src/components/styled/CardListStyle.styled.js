import styled from 'styled-components';

export const CardListStyle = styled.div`
    display: grid;
    row-gap: 16px;
    padding: 32px 24px;
`;

export const CardItem = styled.p`
    color: ${({ theme, color }) =>
        color === 'true' ? theme.colors.themeHover : theme.colors.white};
    text-transform: ${({ capitalize }) =>
        capitalize === 'true' && 'capitalize'};
    grid-area: ${({ gridArea }) => gridArea};
`;

export const CardWrapper = styled.div`
    display: grid;
    grid-template-areas:
        'itemId name'
        'dueDate status'
        'amount status';
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    border-radius: ${({ theme }) => theme.radius.smallRadius};
    padding: 24px;
`;
