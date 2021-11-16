import { createGlobalStyle } from 'styled-components';
import mouse from '../../assets/pointer.png';

import { DarkThemeImg, LightThemeImg } from '../../Images';

export const DarkTheme = {
    bgImage: `${LightThemeImg}`,
    header: '#1E2139',
    p: '#fff',
    logoBG: '#7C5DFA',
};

export const LightTheme = {
    bgImage: `${DarkThemeImg}`,
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
                        cursor: url(${mouse}), auto;
                    }
                }
            }
        }
    }
`;
