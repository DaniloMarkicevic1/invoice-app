import { useState } from 'react';

import { InputField, InputWrap, Label } from '../styled/Form.styled';

function Input({ type, label, placeholder, labelText, value }) {
    const [inputValue, setInputValue] = useState(value);

    return (
        <>
            <InputWrap type={type} label={label}>
                <Label htmlFor={label}>{labelText}</Label>
                <InputField
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={placeholder}
                    type={type}
                    name={label}
                    id={label}
                    value={inputValue}
                />
            </InputWrap>
        </>
    );
}

export default Input;
