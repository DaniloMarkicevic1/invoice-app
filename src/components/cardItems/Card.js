import { CardItem } from '../styled/CardListStyle.styled';

function Card({ id, clientName, paymentDue, status, total }) {
    return (
        <>
            <CardItem gridArea="itemId">{id}</CardItem>
            <CardItem gridArea="name">{clientName}</CardItem>
            <CardItem gridArea="dueDate" color="true">
                {paymentDue}
            </CardItem>
            <CardItem gridArea="status" capitalize="true">
                {status}
            </CardItem>
            <CardItem gridArea="amount">{total}</CardItem>
        </>
    );
}

export default Card;
