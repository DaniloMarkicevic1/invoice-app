import { useContext } from 'react';
import Context from '../../contexts/context';

import Address from './AddressForm';
import Input from '../buttons/Input';

import { BillTitle, SectionWrapper } from '../styled/Form.styled';

function BillTo() {
    const { oneCard } = useContext(Context);

    const { clientAddress, clientName, clientEmail } = oneCard[0];

    return (
        <>
            <SectionWrapper>
                <BillTitle billTitle="to">Bill To</BillTitle>

                <Input
                    type="text"
                    name="clientName"
                    placeholder="Client Name"
                    labelText="Client Name"
                    value={clientName}
                />
                <Input
                    type="text"
                    name="clientEmail"
                    placeholder="Client Email"
                    value={clientEmail}
                    labelText="Client Email"
                />

                <Address address={clientAddress} />
            </SectionWrapper>
        </>
    );
}

export default BillTo;
