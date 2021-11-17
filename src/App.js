import { useState } from 'react';

import Header from './components/header/Header';
import Card from './components/cardItems/Card';
import AddSection from './components/cardItems/AddSection';

import CardContextProvider from './contexts/CardContext';

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
                    <Header themeToggler={themeTogglerHandler} />
                <Container>
                <AddSection />
                    <CardContextProvider>
                        <Card />
                    </CardContextProvider>
                </Container>
            </ThemeProvider>
        </>
    );
}

export default App;
