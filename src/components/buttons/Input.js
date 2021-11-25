import { useContext } from 'react';

import Context from '../../contexts/context';

import { InputField, InputWrap, Label } from '../styled/Form.styled';

function Input({ type, label, placeholder, labelText, value }) {
    const { edit, newValue, setNewValue } = useContext(Context);
    setNewValue(value);
    console.log(value);
    return (
        <>
            <InputWrap type={type} label={label}>
                <Label htmlFor={label}>{labelText}</Label>
                <InputField
                    onInput={(e) => {
                        setNewValue(e.target.value);
                        edit(e.target.value, label);
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
