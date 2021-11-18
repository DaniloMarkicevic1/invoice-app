import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    padding: 32px 24px;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
`;

export const Invoices = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 81px 0 0;
`;

export const InvoiceTitle = styled.p`
    font-size: ${({ theme }) => theme.font.size.l};
    line-height: ${({ theme }) => theme.lineHeight.m};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    padding: 0 0 4px 0;
`;

export const NumOfInvoices = styled.p`
    color: ${({ theme }) => theme.colors.grayishWhite};
    font-size: ${({ theme }) => theme.font.size.s};
    line-height: ${({ theme }) => theme.lineHeight.xs};
    font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const Filter = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    margin: 0 18px 0 0;

    ul {
        pointer-events: ${({ toggle }) => toggle === 'show' && 'auto'};
        opacity: ${({ toggle }) => toggle === 'show' && 1};
    }
    svg {
        transform: ${({ toggle }) =>
            toggle === 'show' ? 'rotate(180deg)' : 0};
    }

    svg {
        margin-bottom: 3px;
        transition: 0.2s ease;
    }
`;

export const FilterText = styled.div`
    padding: 0 12px 0 0;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.s};
    line-height: ${({ theme }) => theme.lineHeight.xs};
`;

export const FilterOptions = styled.ul`
    position: absolute;
    opacity: 0;
    width: 192px;
    height: 128px;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    box-shadow: ${({ theme }) => theme.boxShadow.darkOne};
    padding: 24px 0 24px 24px;
    border-radius: ${({ theme }) => theme.radius.smallRadius};
    left: -120%;
    top: calc(100% + 23px);
    box-shadow: ${({ theme }) => theme.boxShadow.darkOne};
    transition: opacity 200ms ease-in-out;
    pointer-events: none;
`;

export const Option = styled.li`
    list-style-type: none;
`;
export const BtnWrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: ${({ theme }) => theme.radius.btnRadius};
    &:hover {
        button {
            background-color: ${({ theme }) => theme.colors.btnPrimaryHover};
        }
        path {
            fill: ${({ theme }) => theme.colors.btnPrimaryHover};
        }
    }
`;

export const IconWrap = styled.div`
    position: absolute;
    display: flex;
    margin: 6px;
    border-radius: ${({ theme }) => theme.radius.circleRadius};
    background-color: ${({ theme }) => theme.colors.white};
    padding: 11px;
    svg {
        width: 10px;
        height: 10px;
    }
`;
