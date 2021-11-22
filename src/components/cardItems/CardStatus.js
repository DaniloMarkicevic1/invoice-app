import { CardStatusWrapper } from '../styled/CardListStyle.styled';
import { LittleCircle } from '../styled/CardListStyle.styled';

function CardStatus({ status }) {
    return (
        <CardStatusWrapper status={status} className="status" itemTag="status">
            <LittleCircle className="littleCircle" /> {status}
        </CardStatusWrapper>
    );
}

export default CardStatus;
