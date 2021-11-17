import styled from 'styled-components';

export const Container = styled.div`
    width: 1000px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    text-align: center;
    background-color: ${({theme}) => theme.backgroundColor};
`;
