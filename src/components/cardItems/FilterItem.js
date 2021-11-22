import { useState } from 'react';
import Checkbox from '../buttons/Checkbox';
import { Option, Span, Label } from '../styled/AddSection.styled';

import { useContext } from 'react';
import Context from '../../contexts/context';

function FilterItem({ name }) {
    const [checked, setChecked] = useState(false);
    
    
    const { filterFunc } = useContext(Context);

    function handleCheckboxChange(event) {
        setChecked(event.target.checked);
        filterFunc(checked, name)
    }

    return (
        <Option>
            <Label className="hover">
                <Checkbox
                    checked={checked}
                    onChange={(e) => handleCheckboxChange(e)}
                    id={name}
                    name={name}
                    htmlFor={name}
                />
                <Span>{name}</Span>
            </Label>
        </Option>
    );
}

export default FilterItem;
