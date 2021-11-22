import { useContext, useState } from 'react';

import {
    Wrapper,
    Invoices,
    InvoiceTitle,
    NumOfInvoices,
    Filter,
    FilterText,
    BtnWrap,
    PlusIconWrap,
} from '../styled/AddSection.styled';

import { ArrowDown, PlusIcon } from '../../Images';

import Button from '../buttons/Button';
import FilterList from './FilterList';
import Context from '../../contexts/context';
function AddSection() {
    const [toggleFilter, setToggleFilter] = useState('hide');
    const { filteredData,data } = useContext(Context);

    let helper;

    if(filteredData.length === 0){
        helper = data
    }
    else {
        helper = filteredData;
    }
    
    function toggleFilterHandler() {
        toggleFilter === 'hide'
            ? setToggleFilter('show')
            : setToggleFilter('hide');
    }

    return (
        <Wrapper>
            <Invoices>
                <InvoiceTitle>Invoices</InvoiceTitle>
                <NumOfInvoices>{helper.length} Invoices</NumOfInvoices>
            </Invoices>
            <Filter
                onClick={toggleFilterHandler}
                className="filter"
                toggle={toggleFilter}
            >
                <FilterText className="hover">Filter</FilterText>
                <ArrowDown className="hover" />
                <FilterList />
            </Filter>
            <BtnWrap className="hover">
                <PlusIconWrap>
                    <PlusIcon />
                </PlusIconWrap>
                <Button text="New" btn="new"></Button>
            </BtnWrap>
        </Wrapper>
    );
}

export default AddSection;
