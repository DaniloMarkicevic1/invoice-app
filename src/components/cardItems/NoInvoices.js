import { EmptyInvoices } from '../../Images';

import { Text, Img, Span, NoInvoiceWrap } from '../styled/NoInvoices.styled';

function NoInvoices() {
    return (
        <NoInvoiceWrap>
            <Img src={EmptyInvoices} alt="There are no invoices image" />
            <Text bold="bold">There is nothing here</Text>
            <Text>
                Create an invoice by clicking the
                <Span> New</Span> button and get started
            </Text>
        </NoInvoiceWrap>
    );
}

export default NoInvoices;
