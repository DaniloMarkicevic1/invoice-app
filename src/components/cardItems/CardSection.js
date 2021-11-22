import { useContext } from 'react';

import NoInvoices from './NoInvoices';
import CardInfo from './CardInfo';
import CardList from './CardList';
import Context from '../../contexts/context';
import AddSection from './AddSection';

function CardSection() {
    const { show } = useContext(Context);

    if (show === 'cardInfo') {
        return <CardInfo />;
    }
    if (show === 'noInvoices') {
        return <NoInvoices />;
    }
    if (show === 'cardList') {
        return (
            <>
                <AddSection />
                <CardList />
            </>
        );
    }
    
}

export default CardSection;
