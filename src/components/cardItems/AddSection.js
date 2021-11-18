import {
    Wrapper,
    Invoices,
    InvoiceTitle,
    NumOfInvoices,
    Filter,
    FilterText,
    FilterOptions,
    Option,
    BtnWrap,
    IconWrap,
} from '../styled/AddSection.styled';
import { ArrowDown, PlusIcon } from '../../Images';

import Button from '../buttons/Button';
import { useState } from 'react';

function AddSection() {
    const [toggleFilter, setToggleFilter] = useState('hide');

    function toggleFilterHandler() {
        toggleFilter === 'hide'
            ? setToggleFilter('show')
            : setToggleFilter('hide');
    }

    return (
        <Wrapper>
            <Invoices>
                <InvoiceTitle>Invoices</InvoiceTitle>
                <NumOfInvoices>7 Invoices</NumOfInvoices>
            </Invoices>
            <Filter className="hover filter" toggle={toggleFilter}>
                <FilterText onClick={toggleFilterHandler}>Filter</FilterText>
                <ArrowDown onClick={toggleFilterHandler} />
                <FilterOptions>
                    <Option>
                        <input type="checkbox" id="draft" name="draft" />
                        <label htmlFor="draft">Draft</label>
                    </Option>
                    <Option>
                        <input type="checkbox" id="pending" name="pending" />
                        <label htmlFor="pending">Pending</label>
                    </Option>
                    <Option>
                        <input type="checkbox" id="paid" name="paid" />
                        <label htmlFor="paid">Paid</label>
                    </Option>
                </FilterOptions>
            </Filter>
            <BtnWrap className="hover">
                <IconWrap>
                    <PlusIcon />
                </IconWrap>
                <Button text="New" bg="btnPrimary" textCollor="white"></Button>
            </BtnWrap>
        </Wrapper>
    );
}

export default AddSection;
