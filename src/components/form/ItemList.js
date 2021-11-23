import { useContext } from 'react';
import Context from '../../contexts/context';

import Input from '../buttons/Input';

import { ItemTitle, ItemWrapper, SectionWrapper } from '../styled/Form.styled';

function ItemList() {
    const { oneCard } = useContext(Context);

    const { items } = oneCard[0];
    let labelText = '';

    function setLabel(text) {
        switch (text) {
            case 'name':
                labelText = 'Item Name';
                break;
            case 'quantity':
                labelText = 'Qty.';
                break;
            case 'price':
                labelText = 'Price';
                break;
            case 'total':
                labelText = 'Total';
                break;
            default:
                break;
        }
    }

    return (
        <>
            <SectionWrapper>
                <ItemTitle>Item List</ItemTitle>

                <ItemWrapper>
                    {items.map((item) => {
                        return Object.entries(item).map(([itemName, value]) => {
                            setLabel(itemName);

                            return (
                                <Input
                                    key={itemName}
                                    type="text"
                                    label={itemName}
                                    placeholder={labelText}
                                    labelText={labelText}
                                    value={value}
                                />
                            );
                        });
                    })}
                </ItemWrapper>
            </SectionWrapper>
        </>
    );
}

export default ItemList;
