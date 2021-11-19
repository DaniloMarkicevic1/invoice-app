import {
    Wrapper,
    Invoices,
    InvoiceTitle,
    NumOfInvoices,
    Filter,
    FilterText,
    BtnWrap,
    IconWrap,
} from '../styled/AddSection.styled';
import { ArrowDown, PlusIcon } from '../../Images';

import Button from '../buttons/Button';
import { useState } from 'react';
import FilterList from './FilterList';

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
            <Filter className="filter" toggle={toggleFilter}>
                <FilterText onClick={toggleFilterHandler} className="hover">
                    Filter
                </FilterText>
                <ArrowDown onClick={toggleFilterHandler} className="hover" />
                <FilterList />
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
