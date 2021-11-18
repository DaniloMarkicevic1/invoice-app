import { useState } from 'react';
import Context from './Context';
import CardData from '../data/data.json';

const CardContextProvider = (props) => {
    const [data, setData] = useState([CardData]);

    return (
        <Context.Provider value={{ data }}>{props.children}</Context.Provider>
    );
};

export default CardContextProvider;
