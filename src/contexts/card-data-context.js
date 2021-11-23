import { useState } from 'react';
import Context from './context';
import CardData from '../data/data.json';

const CardContextProvider = (props) => {
    const dataFile = [CardData];

    // Data States
    const [data, setData] = useState([...dataFile][0]);
    const [oneCard, setOneCard] = useState();
    const [filteredData, setFilteredData] = useState([]);

    // CheckBox states
    const [draft, setDraft] = useState(false);
    const [pending, setPending] = useState(false);
    const [paid, setPaid] = useState(false);

    const filterHelper = [];

    function filterFunc(checked, name) {
        if (!checked) {
            Object.values(data).forEach((item) => {
                if (item.status === name) {
                    filterHelper.push(item);
                }
            });
            setFilteredData([...filterHelper, ...filteredData]);
        }

        if (checked) {
            let helper = filteredData.filter((item) => item.status !== name);
            setFilteredData([...filterHelper, ...helper]);
        }
    }

    function oneCardDataHandler(string) {
        setOneCard(data.filter((item) => item.id === string));
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
                filteredData,
                data,
                oneCard,
                oneCardDataHandler,
                setData,
                filterFunc,
                setFilteredData,
                paid,
                draft,
                pending,
                setPaid,
                setDraft,
                setPending,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default CardContextProvider;
