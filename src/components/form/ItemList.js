import { useContext } from 'react';

import Context from '../../contexts/context';

import Button from '../buttons/Button';
import Input from '../buttons/Input';

import { IconDelete } from '../../Images';

import {
    ItemWrap,
    ItemTitle,
    ItemListWrapper,
    SectionWrapper,
} from '../styled/Form.styled';

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

    function decimals(itemName, value) {
        if (itemName === 'price' || itemName === 'total') {
            return value.toFixed(2);
        } else {
            return value;
        }
    }
    // Items in Item List
    function mapItems(item) {
        return (
            <ItemWrap label={item.name}>
                {Object.entries(item).map(([itemName, value]) => {
                    setLabel(itemName);
                    return (
                        <>
                            <Input
                                key={itemName}
                                type="text"
                                label={itemName}
                                placeholder={labelText}
                                labelText={labelText}
                                value={decimals(itemName, value)}
                            />
                        </>
                    );
                })}
                <IconDelete label="delete" className="hover" />
            </ItemWrap>
        );
    }

    return (
        <SectionWrapper>
            <ItemTitle>Item List</ItemTitle>
            <ItemListWrapper>
                {items.map((item) => {
                    return mapItems(item);
                })}
            </ItemListWrapper>
            <Button text="+ Add New Item" btn="newItem" />
        </SectionWrapper>
    );
}

export default ItemList;
