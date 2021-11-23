import { useContext, useState } from 'react';
import Context from '../../contexts/context';

import Input from '../buttons/Input';

import { Label, Select, SelectOption } from '../styled/Form.styled';

function InvoiceDate(type, paymentTerms, invoiceDate) {
    const [dateValue, setDateValue] = useState(invoiceDate);

    const { oneCard } = useContext(Context);
    const { description } = oneCard[0];

    return (
        <>
            <Input
                onChange={() => setDateValue(dateValue)}
                type="date"
                label="date"
                labelText="Invoice Date"
                placeholder={invoiceDate}
                value={dateValue}
            />
            <Label>
                Payment Terms
                <Select>
                    <SelectOption>Net 1 Day</SelectOption>
                    <SelectOption>Net 7 Days</SelectOption>
                    <SelectOption>Net 14 Days</SelectOption>
                    <SelectOption>Net 30 Days</SelectOption>
                </Select>
            </Label>
            <Input
                type="text"
                label="description"
                labelText="Project / Description"
                placeholder={description}
                value={description}
            />
        </>
    );
}

export default InvoiceDate;
