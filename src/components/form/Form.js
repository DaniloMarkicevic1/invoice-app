import { useContext } from 'react';
import Context from '../../contexts/context';

import GoBack from '../buttons/GoBack';
import BillFrom from './BillFrom';
import BillTo from './BillTo';
import InvoiceDate from './InvoiceDate';
import ItemList from './ItemList';

import { Hashtag } from '../styled/CardListStyle.styled';
import { FormButtons, FormTitle, FormWrapper } from '../styled/Form.styled';
import { Wrapper } from '../styled/Form.styled';
import Button from '../buttons/Button';
import { useNavigate } from 'react-router-dom';

function Form({ type }) {
    const { oneCard } = useContext(Context);
    const navigate = useNavigate();

    function title(type) {
        if (type === 'add-new') {
            return <FormTitle>New Invoice</FormTitle>;
        } else {
            const { id } = oneCard[0];
            return (
                <FormTitle>
                    Edit <Hashtag>#</Hashtag>
                    {id}
                </FormTitle>
            );
        }
    }

    function formButtons(type) {
        if (type === 'add-new') {
            return (
                <FormButtons type={type}>
                    <Button
                        text="Discard"
                        onClick={() => navigate('/cardInfo')}
                        btn="two"
                    />
                    <Button btn="one" text="Save & Send" />
                    <Button btn="four" text="Save as Draft" />
                </FormButtons>
            );
        } else {
            return (
                <FormButtons type={type}>
                    <Button
                        onClick={() => navigate('/cardInfo')}
                        text="Cancel"
                        btn="two"
                    />
                    <Button text="Save Changes" btn="one" />
                </FormButtons>
            );
        }
    }

    return (
        <>
            <Wrapper>
                <GoBack className="padding" />

                {title(type)}
            </Wrapper>

            <FormWrapper onSubmit={(e) => e.preventDefault()}>
                <BillFrom />

                <BillTo />

                <InvoiceDate />

                <ItemList />
            </FormWrapper>

            {formButtons(type)}
        </>
    );
}

export default Form;
