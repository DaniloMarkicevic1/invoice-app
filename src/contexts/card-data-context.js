import { useState } from 'react';

import Context from './context';
import CardData from '../data/data.json';

const CardContextProvider = (props) => {
    const dataFile = [CardData];

    // Data States
    const [data, setData] = useState([...dataFile][0]);
    const [oneCard, setOneCard] = useState([...data]);
    const [filteredData, setFilteredData] = useState([]);

    const [editedInfo, setEditedInfo] = useState({
        id: '',
        createdAt: '',
        paymentDue: '',
        description: '',
        paymentTerms: 0,
        clientName: '',
        clientEmail: '',
        status: '',
        senderAddress: {
            street: '',
            city: '',
            postCode: '',
            country: '',
        },
        clientAddress: {
            street: '',
            city: '',
            postCode: '',
            country: '',
        },
        items: [
            {
                name: '',
                quantity: 0,
                price: 0,
                total: 0,
            },
        ],
        total: 0,
    });
    // CheckBox states
    const [draft, setDraft] = useState(false);
    const [pending, setPending] = useState(false);
    const [paid, setPaid] = useState(false);

    const filterHelper = [];

    function oneCardDataHandler(string) {
        setOneCard(data.filter((item) => item.id === string));
        setEditedInfo(data.filter((item) => item.id === string));
    }
    function saveChanges() {
        setOneCard([...editedInfo]);
        console.log('saveChanges');
    }

    function cancelButton(string) {
        setOneCard(data.filter((item) => item.id === string));
    }
    function edit(newValue, label) {}

    function deleteItem() {
        setData(data.filter((dataItem) => dataItem.id !== oneCard[0].id));
    }

    function markAsPaid() {
        const paid = [...oneCard];
        paid[0].status = 'paid';
        setOneCard([...paid]);
    }

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
                // Editing
                deleteItem,
                markAsPaid,
                edit,
                saveChanges,
                cancelButton,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default CardContextProvider;
