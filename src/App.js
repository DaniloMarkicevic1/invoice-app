import { useState } from 'react';

import Header from './components/header/Header';
import CardSection from './components/cardItems/CardSection';

import CardContextProvider from './contexts/card-data-context';

import { Container } from './components/styled/Container.styled';

import { ThemeProvider } from 'styled-components';
import { DarkTheme, GlobalStyle } from './components/styled/Themes';

function App() {
    const [theme, setTheme] = useState('light');

    const themeTogglerHandler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <>
            {/* <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}> */}
            <ThemeProvider theme={DarkTheme}>
                <GlobalStyle />
                <Header themeToggler={themeTogglerHandler} />
                <Container>
                    <CardContextProvider>
                        <CardSection />
                    </CardContextProvider>
                </Container>
            </ThemeProvider>
        </>
    );
}

export default App;
