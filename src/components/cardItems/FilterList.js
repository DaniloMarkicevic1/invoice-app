import { useContext } from 'react';
import Context from '../../contexts/context';

import FilterItem from './FilterItem';

import { FilterOptions } from '../styled/AddSection.styled';

function FilterList() {
    const { paid, draft, pending, setPaid, setDraft, setPending } =
        useContext(Context);

    return (
        <FilterOptions>
            <FilterItem name="draft" checked={draft} set={setDraft} />

            <FilterItem name="pending" checked={pending} set={setPending} />

            <FilterItem name="paid" checked={paid} set={setPaid} />
        </FilterOptions>
    );
}

export default FilterList;
