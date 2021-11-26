import { useState } from 'react';

import Context from './context';
import CardData from '../data/data.json';

const CardContextProvider = (props) => {
    const dataFile = [...CardData];

    // Data States
    const [data, setData] = useState([...dataFile]);
    const [oneCard, setOneCard] = useState([...data]);
    const [filteredData, setFilteredData] = useState([]);

    // CheckBox states
    const [draft, setDraft] = useState(false);
    const [pending, setPending] = useState(false);
    const [paid, setPaid] = useState(false);
    const [editObject, setEditObject] = useState();
    const filterHelper = [];

    function oneCardDataHandler(string) {
        setOneCard(data.filter((item) => item.id === string));
        setEditObject(oneCard);
    }

    function saveChanges() {
        setOneCard(editObject);
    }

    function cancelButton(string) {
        setOneCard(data.filter((item) => item.id === string));
    }

    function edit(newValue, label, from) {
        switch (label) {
            case 'clientName':
                editObject[0].clientName = newValue;
                break;
            case 'description':
                editObject[0].description = newValue;
                break;
            case 'clientEmail':
                editObject[0].clientEmail = newValue;
                break;
            default:
                break;
        }
        switch (from) {
            case 'clientAddress':
                switch (label) {
                    case 'street':
                        editObject[0].clientAddress.street = newValue;
                        break;
                    case 'country':
                        editObject[0].clientAddress.country = newValue;
                        break;
                    case 'city':
                        editObject[0].clientAddress.city = newValue;
                        break;
                    case 'postCode':
                        editObject[0].clientAddress.postCode = newValue;
                        break;
                    default:
                        break;
                }
                break;
            case 'senderAddress':
                switch (label) {
                    case 'street':
                        editObject.senderAddress.street = newValue;
                        break;
                    case 'country':
                        editObject.senderAddress.country = newValue;
                        break;
                    case 'city':
                        editObject.senderAddress.city = newValue;
                        break;
                    case 'postCode':
                        editObject.senderAddress.postCode = newValue;
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
        console.log('Label:', label);
        console.log('Edited Object:', editObject[0]);
        console.log('One Card:', oneCard[0]);
    }

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
                data,
                oneCard,
                oneCardDataHandler,
                // Filter
                filteredData,
                filterFunc,
                setFilteredData,
                //Check Box
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
                editObject,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default CardContextProvider;

// const editObject = {
//     id: oneCard[0].id,
//     createdAt: oneCard.createdAt,
//     paymentDue: '',
//     description: '',
//     paymentTerms: 0,
//     clientName: '',
//     clientEmail: '',
//     status: '',
//     senderAddress: {
//         street: '',
//         city: '',
//         postCode: '',
//         country: '',
//     },
//     clientAddress: {
//         street: '',
//         city: '',
//         postCode: '',
//         country: '',
//     },
//     items: [
//         {
//             name: '',
//             quantity: 0,
//             price: 0,
//             total: 0,
//         },
//     ],
//     total: 0,
// };
