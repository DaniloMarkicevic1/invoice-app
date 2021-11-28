import { useContext, useState } from 'react';

import Context from '../../contexts/context';

import { InputField, InputWrap, Label } from '../styled/Form.styled';

function Input({ type, label, placeholder, labelText, value, from }) {
    const { edit } = useContext(Context);
    const [newValue, setNewValue] = useState(value);

    function setEdit(typedInValue) {
        edit(typedInValue, label, from);
    }

    return (
        <>
            <InputWrap type={type} label={label}>
                <Label htmlFor={label}>{labelText}</Label>
                <InputField
                    onInput={(e) => {
                        setNewValue(e.target.value);
                        setEdit(e.target.value);
                    }}
                    placeholder={placeholder}
                    type={type}
                    name={label}
                    id={label}
                    label={label}
                    value={newValue}
                />
            </InputWrap>
        </>
    );
}

export default Input;
