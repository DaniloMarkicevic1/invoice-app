import { useState } from 'react';

import Header from './components/header/Header';
import Card from './components/cardItems/Card';

import CardContextProvider from './contexts/CardContext';
import HeaderContextProvider from './contexts/HeaderContext';

import { Container } from './components/styled/Container.styled';
import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme, GlobalStyle } from './components/styled/Themes';

function App() {
    const [theme, setTheme] = useState('light');

    const themeTogglerHandler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <>
            <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
                <GlobalStyle />
                <HeaderContextProvider>
                    <Header themeToggler={themeTogglerHandler} />
                </HeaderContextProvider>
                <p>Stats, Add new</p>
                <Container>
                    <CardContextProvider>
                        <Card />
                    </CardContextProvider>
                </Container>
            </ThemeProvider>
        </>
    );
}

export default App;
