import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 32px 24px;

    color: ${({ theme }) => theme.colors.black || theme.blackish};
`;

export const Invoices = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const InvoiceTitle = styled.p``;

export const NumOfInvoices = styled.p`
    color: ${({ theme }) => theme.grayishWhite || theme.gray};
`;

export const Filter = styled.div`
    display: flex;
`;

export const FilterText = styled.div``;

export const FilterOptions = styled.ul``;

export const Option = styled.li`
    list-style-type: none;
`;
export const BtnWrap = styled.div``;
