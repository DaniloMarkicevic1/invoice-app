import { useContext } from 'react';
import Context from '../../contexts/Context';

function Card() {
    const { cards } = useContext(Context);

    return (
        <div>
            {cards.map((card) => (
                <p key={card.id}>{card.card}</p>
            ))}
        </div>
    );
}

export default Card;
