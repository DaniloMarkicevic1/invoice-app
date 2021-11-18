import styled from 'styled-components';

export const PrimaryButton = styled.button`
    background-color: ${({ theme, bg }) =>
        bg === 'btnPrimary' && theme.colors.btnPrimary};
    color: ${({ theme, textCollor }) =>
        textCollor === 'white' && theme.colors.white};
    border-radius: ${({ theme }) => theme.radius.btnRadius};
    padding: 15px 14px 14px 46px;
    border: none;
    outline: none;
`;
