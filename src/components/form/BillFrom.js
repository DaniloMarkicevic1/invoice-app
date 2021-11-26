import { useContext } from 'react';

import Context from '../../contexts/context';
import Address from './AddressForm';

import { BillTitle } from '../styled/Form.styled';

function BillFrom() {
    const { oneCard } = useContext(Context);

    const { senderAddress } = oneCard[0];

    return (
        <>
            <BillTitle billTitle="from">Bill From</BillTitle>
            <Address address={senderAddress} sender="senderAddress" />
        </>
    );
}

export default BillFrom;
