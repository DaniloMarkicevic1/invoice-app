import { useContext } from 'react';
import Context from '../../contexts/context';

import Card from './Card';

import { CardListStyle, CardWrapper } from '../styled/CardListStyle.styled';
import { Link } from 'react-router-dom';
import AddSection from './AddSection';
import NoInvoices from './NoInvoices';

function CardList() {
    const { filteredData, data, oneCardDataHandler } = useContext(Context);
    // Not sure how to do it without helper
    let helper;

    if (filteredData.length === 0) {
        helper = data;
    } else {
        helper = filteredData;
    }

    if (data.length === 0) {
        return <NoInvoices />;
    }

    return (
        <CardListStyle>
            <AddSection />

            {helper.map(({ id, clientName, paymentDue, status, total }, i) => (
                <Link to="/cardInfo" key={i}>
                    <CardWrapper
                        className="hover"
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
                </Link>
            ))}
        </CardListStyle>
    );
}

export default CardList;
