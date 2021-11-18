import styled from 'styled-components';

export const Container = styled.div`
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
`;
