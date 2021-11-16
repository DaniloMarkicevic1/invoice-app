import { useState } from 'react';
import Context from './Context';

const HeaderContextProvider = (props) => {
    const [title, setTitle] = useState([
        { title: 1, id: 1 },
        { title: 2, id: 2 },
        { title: 3, id: 3 },
    ]);

    return (
        <Context.Provider value={{ title }}>{props.children}</Context.Provider>
    );
};

export default HeaderContextProvider;
