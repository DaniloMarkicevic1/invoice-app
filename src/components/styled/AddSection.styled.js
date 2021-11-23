import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
`;

export const Invoices = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto 0 0;
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
    left: -120%;
    top: calc(100% + 23px);
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    pointer-events: none;
    width: 192px;
    height: 128px;
    border-radius: ${({ theme }) => theme.radius.smallRadius};
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    box-shadow: ${({ theme }) => theme.boxShadow.darkOne};
    box-shadow: ${({ theme }) => theme.boxShadow.darkOne};
    padding: 24px 0 24px 24px;
    text-align: left;
    display: grid;
    row-gap: 16px;
`;

export const Option = styled.li`
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-height: ${({ theme }) => theme.lineHeight.xs};
    list-style-type: none;
`;
export const Label = styled.label`
    display: flex;
    align-items: center;
    text-transform: capitalize;
    div {
        vertical-align: middle;
    }
`;
export const Span = styled.span`
    margin-left: 8px;
    margin-top: 3px;
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

export const PlusIconWrap = styled.div`
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
