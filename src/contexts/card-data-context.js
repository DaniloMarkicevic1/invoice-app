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
    const filterHelper = [];

    const editObject = [
        {
            id: oneCard[0].id,
            createdAt: oneCard[0].createdAt,
            paymentDue: oneCard[0].paymentDue,
            description: oneCard[0].description,
            paymentTerms: oneCard[0].paymentTerms,
            clientName: oneCard[0].clientName,
            clientEmail: oneCard[0].clientEmail,
            status: oneCard[0].status,
            senderAddress: {
                street: oneCard[0].senderAddress.street,
                city: oneCard[0].senderAddress.city,
                postCode: oneCard[0].senderAddress.postCode,
                country: oneCard[0].senderAddress.country,
            },
            clientAddress: {
                street: oneCard[0].clientAddress.street,
                city: oneCard[0].clientAddress.city,
                postCode: oneCard[0].clientAddress.postCode,
                country: oneCard[0].clientAddress.country,
            },
            items: [
                {
                    name: oneCard[0].items.name,
                    quantity: oneCard[0].items.quantity,
                    price: oneCard[0].items.price,
                    total: oneCard[0].items.total,
                },
            ],
            total: oneCard[0].total,
        },
    ];

    function oneCardDataHandler(string) {
        setOneCard(data.filter((item) => item.id === string));
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
                        editObject[0].senderAddress.street = newValue;
                        break;
                    case 'country':
                        editObject[0].senderAddress.country = newValue;
                        break;
                    case 'city':
                        editObject[0].senderAddress.city = newValue;
                        break;
                    case 'postCode':
                        editObject[0].senderAddress.postCode = newValue;
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
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
