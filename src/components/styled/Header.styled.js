import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    background-color: ${({ theme }) => theme.header};
    align-items: center;
    justify-content: space-between;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 0 24px;
`;

export const VerticalLine = styled.div`
    border-right: 1px solid #494e6e;
    height: 72px;
`;

export const Logo = styled.img``;

export const LogoBg = styled.div`
    position: relative;
    background-color: #7c5dfa;
    max-height: 72px;
    z-index: 1;
    padding: 23px 22px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    ::before {
        content: '';
        position: absolute;
        z-index: -1;
        top: 50%;
        bottom: 0;
        left: 0;
        right: 0;
        background: #9277ff;
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
`;

export const Avatar = styled.img`
    border-radius: 50%;
    width: 32px;
    height: 32px;
    align-self: center;
    margin: 0 0 0 24px;
`;

export const DarkTheme = styled.svg`
    display: ${({ theme }) => theme.display} path {
        &:hover {
            fill: #dfe3fa;
        }
    }
`;

export const LightTheme = styled.svg`
    ${({ theme }) => theme.display}
    path {
        &:hover {
            fill: #dfe3fa;
        }
    }
`;
