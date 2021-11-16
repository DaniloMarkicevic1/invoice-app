import { useState } from 'react';
import Context from './Context';

const CardContextProvider = (props) => {
    const [cards, setCards] = useState([
        { card: 'Card1', id: 1 },
        { card: 'Card2', id: 2 },
        { card: 'Card3', id: 3 },
    ]);

    return (
        <Context.Provider value={{ cards }}>{props.children}</Context.Provider>
    );
};

export default CardContextProvider;
