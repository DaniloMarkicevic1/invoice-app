import styled from 'styled-components';

export const FormTitle = styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    padding: 24px 0 0 0;
    font-size: ${({ theme }) => theme.font.size.mobileXl};
    text-align: left;
`;

export const Wrapper = styled.div`
    padding: 32px 0 0 24px;
`;

export const FormWrapper = styled.form`
    padding: 0 24px 24px;
    text-align: left;
`;

export const ItemTitle = styled.p`
    color: ${({ theme }) => theme.colors.itemTitle};
    font-size: ${({ theme }) => theme.font.size.mobileL};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    padding: 66px 0 24px 0;
`;

export const ItemListWrapper = styled.div`
    display: grid;
`;

export const ItemWrap = styled.div`
    display: grid;
    grid-template-areas:
        'name name name name name name'
        'qty price price total total delete';
    column-gap: 16px;
    padding: 0 0 24px 0;
    svg {
        align-self: end;
        margin: 0 0 16px 0;
    }
`;

export const SectionWrapper = styled.div``;

export const AddressWrapper = styled.div`
    display: grid;
    grid-template-areas:
        'street street'
        'city postCode'
        'country country';
    column-gap: 23px;
`;

export const BillTitle = styled.p`
    color: ${({ theme }) => theme.colors.btnPrimary};
    font-size: ${({ theme }) => theme.font.size.s};
    padding: ${({ billTitle }) =>
        (billTitle === 'from' && '24px 0 0 0') ||
        (billTitle === 'to' && '40px 0 0')};
`;

export const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${({ type }) =>
        (type === 'date' && '40px 0 0 0') || (type === 'text' && '24px 0 0 0')};
    grid-area: ${({ label }) =>
        // Address Grid Area
        (label === 'street' && 'street') ||
        (label === 'city' && 'city') ||
        (label === 'country' && 'country') ||
        (label === 'postCode' && 'postCode') ||
        // Item List Grid Area
        (label === 'name' && 'name') ||
        (label === 'quantity' && 'qty') ||
        (label === 'price' && 'price') ||
        (label === 'delete' && 'delete') ||
        (label === 'total' && 'total')};
`;

export const InputField = styled.input`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    padding: 17px 0px 16px 20px;
    margin: 10px 0 0 0;
    border: 1px solid ${({ theme }) => theme.colors.backgroundSecondary};
    border-radius: ${({ theme }) => theme.radius.inputRadius};
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    width: 100%;
    &:hover,
    &:focus {
        outline: 1px solid ${({ theme }) => theme.colors.btnPrimary};
    }
`;

export const Select = styled.select`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    padding: 17px 0px 16px 20px;
    margin: 10px 0 0 0;
    border: 1px solid ${({ theme }) => theme.colors.backgroundSecondary};
    border-radius: ${({ theme }) => theme.radius.inputRadius};
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    width: 100%;
`;

export const SelectOption = styled.option``;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.hashtag};
    font-size: ${({ theme }) => theme.font.size.s};
`;

export const ItemList = styled.section``;

export const FormButtons = styled.div`
    display: grid;
    padding: 21px 24px 22px 24px;
    grid-template-areas: ${({ type }) =>
        (type === 'edit' && '". . two third"') ||
        (type === 'add-new' && '"two two four four third third"')};
    column-gap: 8px;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;
