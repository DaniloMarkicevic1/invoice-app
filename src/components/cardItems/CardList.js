import { useContext } from 'react';
import Context from '../../contexts/Context';
import Card from './Card';
import { CardListStyle } from '../styled/CardListStyle.styled';
function CardList() {
    const { data } = useContext(Context);

    return (
        <CardListStyle>
            {data[0].map(({ id, clientName, paymentDue, status, total }, i) => (
                <Card
                    key={i}
                    id={id}
                    clientName={clientName}
                    paymentDue={paymentDue}
                    status={status}
                    total={total}
                />
            ))}
        </CardListStyle>
    );
}

export default CardList;
