import { useState } from 'react';

import Context from './context';

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState('light');

    const themeTogglerHandler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <Context.Provider value={{ themeTogglerHandler, theme }}>
            {props.children}
        </Context.Provider>
    );
};

export default ThemeContextProvider;
