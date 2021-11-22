import { useState } from 'react';
import Context from './context';
import CardData from '../data/data.json';

const CardContextProvider = (props) => {
    const dataFile = [CardData];

    const [show, setShow] = useState('cardList');
    const [data, setData] = useState([...dataFile]);
    const [oneCard, setOneCard] = useState();

    function oneCardDataHandler(string) {
        setOneCard(data[0].filter((item) => item.id === string));
        setShow('cardInfo');
    }

    function formatedDate(date) {
        const formatDate = new Date(date);
        const monthNames = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];

        const dueDay = formatDate.getDate();
        const dueMonth = monthNames[formatDate.getMonth()];
        const dueYear = formatDate.getFullYear();

        return `${dueDay} ${dueMonth} ${dueYear}`;
    }

    return (
        <Context.Provider
            value={{
                formatedDate,
                data,
                oneCard,
                oneCardDataHandler,
                show,
                setShow,
                setData,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default CardContextProvider;
