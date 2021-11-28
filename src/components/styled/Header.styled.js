import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    align-items: center;
    justify-content: space-between;
    transition: 0.5s ease;
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
    background-color: ${({ theme }) => theme.colors.btnPrimary};
    max-height: 72px;
    z-index: 1;
    padding: 23px 22px;
    border-radius: 0px 17px 17px 0px;
    ::before {
        content: '';
        background: ${({ theme }) => theme.colors.btnPrimaryHover};
        position: absolute;
        z-index: -1;
        top: 50%;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 17px 0px 17px 0px;
    }
`;

export const Avatar = styled.img`
    border-radius: 50%;
    width: 32px;
    height: 32px;
    align-self: center;
    margin: 0 0 0 24px;
`;

export const Theme = styled.div`
    .light {
        display: ${({ theme }) => theme.darkIcon || 'unset'};
        margin: 0 23px 0 0;
        @media (min-width: 768px) {
            margin: 0 32px 0 0;
        }
    }
    .dark {
        display: ${({ theme }) => theme.lightIcon || 'unset'};
        margin: 0 24px 0 0;
    }
    &:hover {
        svg {
            path {
                fill: ${({ theme }) => theme.colors.grayishWhite};
            }
        }
    }
`;
