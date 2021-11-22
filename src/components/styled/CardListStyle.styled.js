import styled from 'styled-components';

export const CardListStyle = styled.div`
    display: grid;
    row-gap: 16px;
    padding: 32px 24px;
`;

export const LittleCircle = styled.span``;

export const CardWrapper = styled.div`
    display: grid;
    justify-items: start;
    grid-template-areas:
        'itemId name'
        'dueDate status'
        'amount status';
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    border-radius: ${({ theme }) => theme.radius.smallRadius};
    padding: 24px;
    justify-content: space-between;
    &:hover,
    &:active {
        outline: ${({ theme }) => theme.border.blue};
    }
`;

export const CardStatusWrapper = styled.p`
    display: flex;

    color: ${({ theme, status }) =>
        (status === 'paid' && theme.colors.statusPaid) ||
        (status === 'pending' && theme.colors.statusPending) ||
        (status === 'draft' && theme.colors.grayishWhite)};
    background-color: ${({ theme }) => theme.colors.statusBg};

    font-size: ${({ theme }) => theme.font.size.s};

    font-weight: ${({ theme }) => theme.font.weight.bold};

    line-height: ${({ theme }) => theme.lineHeight.xs};

    width: 104px;
    height: 40px;

    align-items: center;

    justify-content: center;

    justify-self: end;

    text-transform: capitalize;

    border-radius: ${({ theme }) => theme.radius.status};

    .littleCircle {
        width: 8px;
        height: 8px;
        border-radius: ${({ theme }) => theme.radius.circleRadius};
        margin: 0 8px 0 0;
        background-color: ${({ theme, status }) =>
            (status === 'pending' && theme.colors.statusPending) ||
            (status === 'paid' && theme.colors.statusPaid) ||
            (status === 'draft' && theme.colors.grayishWhite)};
    }
`;

export const CardItem = styled.p`
    display: flex;
    color: ${({ theme, itemTag, status }) =>
        (itemTag === 'dueDate' && theme.colors.grayishWhite) ||
        (itemTag !== 'status' && theme.colors.white)};

    background-color: ${({ theme, itemTag }) =>
        itemTag === 'status' && theme.colors.statusBg};

    font-size: ${({ theme, itemTag }) =>
        itemTag === 'amount' ? theme.font.size.m : theme.font.size.s};

    font-weight: ${({ theme, itemTag }) =>
        itemTag === 'name' || itemTag === 'dueDate'
            ? theme.font.weight.medium
            : theme.font.weight.bold};

    line-height: ${({ theme }) => theme.lineHeight.xs};

    grid-area: ${({ itemTag }) => itemTag};

    padding: ${({ itemTag }) =>
        (itemTag === 'itemId' && '0 0 24px') ||
        (itemTag === 'dueDate' && '0 0 8px 0')};

    border-radius: ${({ theme }) => theme.radius.status};

    box-shadow: ${({ theme }) => theme.boxShadow.darkTwo};
`;

export const Hashtag = styled.span`
    color: ${({ theme }) => theme.colors.hashtag};
`;
