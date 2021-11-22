import styled from 'styled-components';

export const Wrapper = styled.div`
    color: ${({ theme }) => theme.colors.white};
    padding: 32px 24px 56px;
`;

export const GoBackWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 100%;
    svg {
        align-self: end;
        margin: 0 0 3px 0;
    }
`;

export const GoBackButton = styled.p`
    padding: 0 0 0px 23px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.s};
`;

export const CardStatusWrap = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    margin: 32px 0 0;
    display: flex;
    padding: 24px 24px 27px;
    justify-content: space-between;
    align-items: center;
    border-radius: ${({ theme }) => theme.radius.smallRadius};
    margin: 32px 0 16px 0;
`;

export const DataWrap = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    border-radius: ${({ theme }) => theme.radius.smallRadius};
    padding: 24px;
    display: grid;
    text-align: left;

    grid-template-areas:
        'idDesc .'
        'senderAddress .'
        'dates billTo'
        'e-mail e-mail'
        'bill bill';
`;

export const ItemWrap = styled.div`
    grid-area: ${({ gridArea }) => gridArea};
    padding: ${({ gridArea, btns }) =>
        (gridArea === 'idDesc' && '0 0 30px 0') ||
        (gridArea === 'senderAddress' && '0 0 31px 0') ||
        (gridArea === 'dates' && '0 0 32px 0') ||
        (gridArea === 'e-mail' && '0 0 40px 0') ||
        (btns === 'buttonArea' && '21px 24px 22px')};

    background-color: ${({ theme, btns }) =>
        btns && theme.colors.backgroundPrimary};
    display: ${({ btns }) => btns && 'grid'};
    grid-template-areas: 'first first second second third third third';
    column-gap: 8px;
`;

export const Item = styled.p`
    font-weight: ${({ theme, bold }) =>
        bold ? theme.font.weight.bold : theme.font.weight.medium};
    font-size: ${({ theme, fontSize }) =>
        (!fontSize && theme.font.size.s) ||
        (fontSize === 'xs' && theme.font.size.xs) ||
        (fontSize === 'l' && theme.font.size.l) ||
        (fontSize === 'mobileM' && theme.font.size.mobileM)};

    grid-area: ${({ gridArea }) => gridArea};
    line-height: ${({ theme, lineHeight }) =>
        (lineHeight === 'xs' && theme.lineHeight.xs) ||
        (lineHeight === 's' && theme.lineHeight.s) ||
        (lineHeight === 'mobileM' && theme.lineHeight.mobileM) ||
        (lineHeight === 'xl' && theme.lineHeight.xl)};
    padding: ${({ padding }) =>
        (padding === 'dateText' && '0 0 12px 0') ||
        (padding === 'betweenDates' && '32px 0 12px 0') ||
        (padding === 'e-mail' && '12px 0 0 0') ||
        (padding === 'clientName' && '12px 0 8px 0')};
`;

export const Hashtag = styled.span`
    color: ${({ theme }) => theme.colors.hashtagSecondary};
`;
export const BillWrap = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: bill;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    border-radius: ${({ theme }) => theme.radius.smallRadius};
    padding: 24px 0 0 0;
    .job {
        display: grid;
        align-items: center;
        justify-content: space-between;
        grid-template-areas:
            'jobDescription jobPrice'
            'quantity jobPrice';
        row-gap: 8px;
        padding: 0 24px 24px 24px;
        justify-items: start;

        font-weight: ${({ theme }) => theme.font.weight.bold};
    }
    .totalAmount {
        border-bottom-left-radius: ${({ theme }) => theme.radius.smallRadius};
        border-bottom-right-radius: ${({ theme }) => theme.radius.smallRadius};
        grid-area: totalAmount;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 24px;
        background-color: ${({ theme }) => theme.colors.black};
    }
`;
