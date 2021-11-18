import { CardItem } from '../styled/CardItem.styled';

function Card({ id, clientName, paymentDue, status, total }) {
    return (
        <>
            <CardItem gridArea="itemId">{id}</CardItem>
            <CardItem gridArea="name">{clientName}</CardItem>
            <CardItem gridArea="dueDate">{paymentDue}</CardItem>
            <CardItem gridArea="status">{status}</CardItem>
            <CardItem gridArea="amount">{total}</CardItem>
        </>
    );
}

export default Card;
