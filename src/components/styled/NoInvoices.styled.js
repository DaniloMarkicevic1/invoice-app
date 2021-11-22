import styled from 'styled-components';

export const Img = styled.img``;

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme, bold }) =>
        bold === 'bold' ? theme.font.size.l : theme.font.size.s};
    font-weight: ${({ theme, bold }) =>
        bold === 'bold' ? theme.font.weight.bold : theme.font.weight.medium};
    padding: ${({ bold }) => bold === 'bold' && '40px 0 24px'};
`;

export const Span = styled.span`
    font-weight: ${({ theme }) => theme.font.weight.bold}; ;
`;

export const NoInvoiceWrap = styled.div`
    padding: 102px 79px 140px;
`;
