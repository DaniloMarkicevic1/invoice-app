import { useContext } from 'react';
import Context from '../../contexts/context';

import Card from './Card';

import { CardListStyle, CardWrapper } from '../styled/CardListStyle.styled';

function CardList() {
    const { filteredData, data, oneCardDataHandler } = useContext(Context);
   
    let helper;

    if(filteredData.length === 0) {
        helper = data;
    }

    else {
        helper = filteredData;
    }

    return (
        <CardListStyle>
            {helper.map(({ id, clientName, paymentDue, status, total }, i) => (
                <CardWrapper
                    className="hover"
                    key={i}
                    onClick={() => oneCardDataHandler(id)}
                >
                    <Card
                        id={id}
                        clientName={clientName}
                        paymentDue={paymentDue}
                        status={status}
                        total={total}
                    />
                </CardWrapper>
            ))}
        </CardListStyle>
    );
}

export default CardList;
