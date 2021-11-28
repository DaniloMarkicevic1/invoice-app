import { useState } from 'react';

import CardContextProvider from './contexts/card-data-context';

import Header from './components/header/Header';
import CardSection from './components/cardItems/CardSection';

import { ThemeProvider } from 'styled-components';
import { Container } from './components/styled/Container.styled';
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
