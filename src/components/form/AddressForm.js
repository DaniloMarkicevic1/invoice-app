import Input from '../buttons/Input';

import { AddressWrapper } from '../styled/Form.styled';

function Address({ address, sender }) {
    let labelText = '';

    function setLabel(text) {
        switch (text) {
            case 'street':
                labelText = 'Street Address';
                break;

            case 'country':
                labelText = 'Country';
                break;

            case 'postCode':
                labelText = 'Post Code';
                break;

            case 'city':
                labelText = 'City';
                break;

            default:
                break;
        }
    }

    return (
        <>
            <AddressWrapper>
                {Object.entries(address).map(([label, address]) => {
                    setLabel(label);

                    return (
                        <Input
                            key={label}
                            type="text"
                            label={label}
                            placeholder={labelText}
                            labelText={labelText}
                            value={address}
                            from={sender}
                        />
                    );
                })}
            </AddressWrapper>
        </>
    );
}

export default Address;
