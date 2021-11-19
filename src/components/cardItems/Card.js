import {
    CardItem,
    Hashtag,
    LittleCircle,
} from '../styled/CardListStyle.styled';

function Card({ id, clientName, paymentDue, status, total }) {
    const totalAmmount = total.toFixed(2).toLocaleString();
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
                Due {paymentDue}
            </CardItem>

            <CardItem
                status={status}
                className="status"
                itemTag="status"
                capitalize="true"
            >
                <LittleCircle className="littleCircle" /> {status}
            </CardItem>

            <CardItem className="amount" itemTag="amount">
                £ {totalAmmount}
            </CardItem>
        </>
    );
}

export default Card;
