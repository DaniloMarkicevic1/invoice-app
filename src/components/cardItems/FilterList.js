import { FilterOptions } from '../styled/AddSection.styled';
import FilterItem from './FilterItem';

function FilterList() {
    return (
        <FilterOptions>
            <FilterItem name={'draft'} />
            <FilterItem name={'pending'} />
            <FilterItem name={'paid'} />
        </FilterOptions>
    );
}

export default FilterList;
