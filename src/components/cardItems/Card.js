import { useContext } from 'react';
import Context from '../../contexts/context';

import CardStatus from './CardStatus';

import { CardItem, Hashtag } from '../styled/CardListStyle.styled';

function Card({ id, clientName, status, total, paymentDue }) {
    const totalAmmount = total.toFixed(2).toLocaleString();

    const { formatedDate } = useContext(Context);

    return (
        <>
            <CardItem className="itemId" itemTag="itemId">
                <Hashtag>#</Hashtag>
                {id}
            </CardItem>

            <CardItem className="name" itemTag="name">
                {clientName}
            </CardItem>

            <CardItem className="dueDate" itemTag="dueDate" color="true">
                Due {formatedDate(paymentDue)}
            </CardItem>

            <CardStatus status={status} itemTag="status" />

            <CardItem className="amount" itemTag="amount">
                £ {totalAmmount}
            </CardItem>
        </>
    );
}

export default Card;
