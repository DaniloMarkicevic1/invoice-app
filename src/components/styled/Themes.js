import { createGlobalStyle } from 'styled-components';

import { Cursor } from '../../Images';

export const DarkTheme = {
    colors: {
        backgroundColor: '#141625',
        backgroundPrimary: '#1E2139',
        backgroundSecondary: '#252945',
        btnPrimary: '#7C5DFA',
        btnPrimaryHover: '#9277FF',
        btnDelete: '#EC5757',
        grayishWhite: '#DFE3FA',
        lightGray: '#373b53',
        white: '#ffffff',
        hashtag: '#888EB0',
        hashtagSecondary: '#7e88c3',
        statusBg: 'rgba(151,151,151, 0.05)',
        statusPending: '#FF8F00',
        statusPaid: '#33D69F',
        black: '#0C0E16',
        itemTitle: '#777f98',
    },
    font: {
        size: {
            xl: '32px',
            mobileXl: '24px',
            l: '20px',
            mobileL: '18px',
            m: '16px',
            mobileM: '15px',
            s: '12px',
            xs: '11px',
        },
        weight: {
            medium: '400',
            bold: 'bold',
        },
    },
    lineHeight: {
        xl: '36px',
        l: '24px',
        m: '22px',
        mobileM: '20px',
        s: '18px',
        xs: '15px',
    },
    boxShadow: {
        darkOne: ' 0px 10px 20px rgba(0, 0, 0, 0.25)',
        darkTwo: '0px 10px 10px -10px rgba(72, 84, 159, 0.100397)',
    },
    radius: {
        btnRadius: '24px',
        circleRadius: '100%',
        smallRadius: '8px',
        inputRadius: '4px',
        checkbox: '2px',
        status: '6px',
    },
    border: {
        blue: `1px solid #7c5dfa`,
        // error
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
                a{
                    text-decoration: none;
                    color: white;
                }
                .hover{
                    &:hover {
                        cursor: url(${Cursor}), auto;
                    }
                }
            }
        }
    }
`;
