import { useState } from 'react';
import Checkbox from '../buttons/Checkbox';
import { Option, Span, Label } from '../styled/AddSection.styled';

function FilterItem({ type, name }) {
    const [checked, setChecked] = useState(false);

    function handleCheckboxChange(event) {
        setChecked(event.target.checked);
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
