import { createGlobalStyle } from 'styled-components';
import { Cursor } from '../../Images';

export const DarkTheme = {
    colors: {
        backgroundColor: '#141625',
        backgroundPrimary: '#1E2139',
        backgroundSecondary: '#252945',
        btnPrimary: '#7C5DFA',
        btnPrimaryHover: '#9277FF',
        themeHover: '#DFE3FA',
        grayishWhite: '#DFE3FA',
        white: '#ffffff',
    },
    font: {
        size: {
            xl: '32px',
            l: '20px',
            m: '16px',
            s: '12px',
            xs: '11px',
        },
        weight: {
            medium: '500',
            bold: 'bold',
        },
    },
    lineHeight: {
        xl: '36px',
        l: '24px',
        m: '22px',
        s: '18px',
        xs: '15px',
    },
    boxShadow: {
        darkOne: ' 0px 10px 20px rgba(0, 0, 0, 0.25)',
    },
    radius: {
        btnRadius: '24px',
        circleRadius: '100%',
        smallRadius: '8px',
    },
    lightIcon: 'none',
};

export const LightTheme = {
    backgroundColor: '#F8F8FB',
    darkIcon: 'none',
    header: '#373B53',
    p: '#000',
    logoBG: '#7C5DFA',
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0px;
        padding: 0px;
        box-sizing: border-box;
        font-family:"Spartan", sans-serif;
        body {
            #root {
                
                .hover{
                    &:hover {
                        cursor: url(${Cursor}), auto;
                    }
                }
            }
        }
    }
`;
