import styled from 'styled-components';

export const CardListStyle = styled.div`
    display: grid;
    row-gap: 16px;
    padding: 32px 24px;
`;

export const LittleCircle = styled.div``;
// pending paid draft
export const CardItem = styled.p`
    display: flex;
    color: ${({ theme, itemTag, status }) =>
        (itemTag === 'dueDate' && theme.colors.grayishWhite) ||
        (itemTag !== 'status' && theme.colors.white) ||
        (status === 'paid' && theme.colors.statusPaid) ||
        (status === 'pending' && theme.colors.statusPending) ||
        (status === 'draft' && theme.colors.grayishWhite)};

    background-color: ${({ theme, itemTag }) =>
        itemTag === 'status' && theme.colors.statusBg};

    font-size: ${({ theme, itemTag }) =>
        itemTag === 'amount' ? theme.font.size.m : theme.font.size.s};

    font-weight: ${({ theme, itemTag }) =>
        itemTag === 'name' || itemTag === 'dueDate'
            ? theme.font.weight.medium
            : theme.font.weight.bold};

    text-transform: ${({ capitalize }) =>
        capitalize === 'true' && 'capitalize'};

    line-height: ${({ theme }) => theme.lineHeight.xs};

    width: ${({ itemTag }) => itemTag === 'status' && '104px'};

    height: ${({ itemTag }) => itemTag === 'status' && '40px'};

    grid-area: ${({ itemTag }) => itemTag};

    padding: ${({ itemTag }) =>
        (itemTag === 'itemId' && '0 0 24px') ||
        (itemTag === 'dueDate' && '0 0 8px 0')};

    align-items: ${({ itemTag }) => itemTag === 'status' && 'center'};

    justify-content: ${({ itemTag }) => itemTag === 'status' && 'center'};

    border-radius: ${({ theme }) => theme.radius.status};

    box-shadow: ${({ theme }) => theme.boxShadow.darkTwo};

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
`;

export const Hashtag = styled.span`
    color: ${({ theme }) => theme.colors.hashtag};
`;
