import { useContext } from 'react';
import Context from '../../contexts/context';

import GoBack from '../buttons/GoBack';
import BillFrom from './BillFrom';
import BillTo from './BillTo';
import InvoiceDate from './InvoiceDate';
import ItemList from './ItemList';

import { Hashtag } from '../styled/CardListStyle.styled';
import { FormTitle, FormWrapper } from '../styled/Form.styled';
import { Wrapper } from '../styled/Form.styled';

function Form({ type }) {
    const { oneCard } = useContext(Context);
    const { id } = oneCard[0];

    function title(type) {
        if (type === 'add-new') {
            return <FormTitle>New Invoice</FormTitle>;
        } else {
            return (
                <FormTitle>
                    Edit <Hashtag>#</Hashtag>
                    {id}
                </FormTitle>
            );
        }
    }

    return (
        <>
            <Wrapper>
                <GoBack className="padding" />

                {title(type)}
            </Wrapper>

            <FormWrapper>
                <BillFrom />

                <BillTo />

                <InvoiceDate />

                <ItemList />
            </FormWrapper>
        </>
    );
}

export default Form;
