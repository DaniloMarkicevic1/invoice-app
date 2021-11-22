import { useState } from 'react';
import Context from './context';
import CardData from '../data/data.json';

const CardContextProvider = (props) => {
    const dataFile = [CardData];

    const [show, setShow] = useState('cardList');
    const [data, setData] = useState([...dataFile][0]);
    const [oneCard, setOneCard] = useState();
    const [filteredData, setFilteredData] = useState([])

 
   const filterHelper = [];
    function filterFunc(checked, name) {
        if(!checked) {
            Object.values(data).forEach(item => {
                if(item.status === name) {
                    filterHelper.push(item)
                }
            }); 
            setFilteredData([...filterHelper,...filteredData])
        }
          
        else if(checked) {
            let helper = filteredData.filter(item => item.status !== name)

            setFilteredData([...filterHelper,...helper])

        }

    }
 
    function oneCardDataHandler(string) {
        setOneCard(data.filter((item) => item.id === string));
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
                filteredData,
                data,
                oneCard,
                oneCardDataHandler,
                show,
                setShow,
                setData,
                filterFunc
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default CardContextProvider;
