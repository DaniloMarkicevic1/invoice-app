import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Context from '../../contexts/context';

import Button from '../buttons/Button';
import FilterList from './FilterList';

import { ArrowDown, PlusIcon } from '../../Images';

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

function AddSection() {
    const [toggleFilter, setToggleFilter] = useState(false);

    const { filteredData, data } = useContext(Context);

    //
    let helper;

    if (filteredData.length === 0) {
        helper = data;
    } else {
        helper = filteredData;
    }

    function toggleFilterHandler() {
        toggleFilter ? setToggleFilter(false) : setToggleFilter(true);
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
                <Link to="/add-new">
                    <PlusIconWrap>
                        <PlusIcon />
                    </PlusIconWrap>
                    <Button text="New" btn="new"></Button>
                </Link>
            </BtnWrap>
        </Wrapper>
    );
}

export default AddSection;
