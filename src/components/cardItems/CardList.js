import { useContext } from 'react';
import Context from '../../contexts/Context';
import Card from './Card';
import { CardListStyle, CardWrapper } from '../styled/CardListStyle.styled';
function CardList() {
    const { data } = useContext(Context);

    return (
        <CardListStyle>
            {data[0].map(({ id, clientName, paymentDue, status, total }, i) => (
                <CardWrapper>
                    <Card
                        key={i}
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
