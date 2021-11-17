import { createGlobalStyle } from 'styled-components';
import { Cursor } from '../../Images';

export const DarkTheme = {
    backgroundColor: '#141625',
    lightIcon: 'none',
    themeHover: '#DFE3FA',
    header: '#1E2139',
    logoBG: '#7C5DFA',
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

        body{
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
