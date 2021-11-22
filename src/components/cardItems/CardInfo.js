import {
    CardStatusWrap,
    Wrapper,
    DataWrap,
    ItemWrap,
    BillWrap,
    Item,
    Hashtag,
} from '../styled/CardInfo.styled';

import CardStatus from './CardStatus';
import { useContext } from 'react';
import Context from '../../contexts/context';
import Button from '../buttons/Button';
import GoBack from '../buttons/GoBack';

function CardInfo() {
    const { oneCard, formatedDate } = useContext(Context);

    const {
        id,
        description,
        clientAddress,
        senderAddress,
        status,
        createdAt,
        paymentDue,
        clientName,
        clientEmail,
        items,
        total,
    } = oneCard[0];

    function email() {
        if (clientEmail === '') {
            return 'No Info';
        } else {
            return clientEmail;
        }
    }

    function getAddress(address) {
        return Object.values(address).map((address, i) => {
            if (address === '') {
                return (
                    <Item fontSize="xs" key={i} lineHeight="s">
                        No Info
                    </Item>
                );
            } else {
                return (
                    <Item fontSize="xs" key={address} lineHeight="s">
                        {address}
                    </Item>
                );
            }
        });
    }

    function getBill() {
        return Object.values(items).map((item) => {
            return (
                <ItemWrap className="job" key={item.name}>
                    <Item gridArea="jobDescription" bold={true}>
                        {item.name}
                    </Item>
                    <Item gridArea="quantity" bold={true}>
                        <Hashtag>
                            {item.quantity} x £ {item.price}
                        </Hashtag>
                    </Item>
                    <Item gridArea="jobPrice" bold={true}>
                        £ {item.total}
                    </Item>
                </ItemWrap>
            );
        });
    }
    return (
        <>
            <Wrapper>
                {/* Go Back */}
                <GoBack />
                {/* Card Status */}
                <CardStatusWrap>
                    <Item lineHeight="xs">Status</Item>
                    <CardStatus status={status} />
                </CardStatusWrap>
                {/* Information */}
                <DataWrap>
                    {/* ID */}
                    <ItemWrap gridArea="idDesc">
                        <Item bold={true} lineHeight="s">
                            <Hashtag>#</Hashtag>
                            {id}
                        </Item>
                        <Item lineHeight="s">{description}</Item>
                    </ItemWrap>
                    {/* Sender Address */}
                    <ItemWrap gridArea="senderAddress">
                        {getAddress(senderAddress)}
                    </ItemWrap>
                    {/* Dates */}
                    <ItemWrap gridArea="dates">
                        <Item lineHeight="xs" padding="dateText">
                            Invoice Date
                        </Item>
                        <Item
                            bold={true}
                            fontSize="mobileM"
                            lineHeight="mobileM"
                        >
                            {formatedDate(createdAt)}
                        </Item>
                        <Item lineHeight="xs" padding="betweenDates">
                            Payment Due
                        </Item>
                        <Item
                            bold={true}
                            fontSize="mobileM"
                            lineHeight="mobileM"
                        >
                            {formatedDate(paymentDue)}
                        </Item>
                    </ItemWrap>
                    {/* Client Information */}
                    <ItemWrap gridArea="billTo">
                        <Item lineHeight="xs">Bill To</Item>
                        <Item
                            bold={true}
                            lineHeight="mobileM"
                            padding="clientName"
                            fontSize="mobileM"
                        >
                            {clientName}
                        </Item>
                        {getAddress(clientAddress)}
                    </ItemWrap>
                    {/* E-mail */}
                    <ItemWrap gridArea="e-mail">
                        <Item lineHeight="xs">Sent To</Item>
                        <Item
                            bold={true}
                            fontSize="mobileM"
                            lineHeight="mobileM"
                            padding="e-mail"
                        >
                            {email()}
                        </Item>
                    </ItemWrap>
                    {/* Bill Information */}
                    <BillWrap gridArea="bill">
                        {getBill()}
                        <ItemWrap
                            className="totalAmount"
                            gridArea="totalAmount"
                        >
                            <Item fontSize="xs"> Amount Due </Item>
                            <Item bold={true} fontSize="l" lineHeight="xl">
                                £{total.toFixed(2).toLocaleString()}
                            </Item>
                        </ItemWrap>
                    </BillWrap>
                </DataWrap>
            </Wrapper>
            <ItemWrap btns="buttonArea">
                <Button text="Edit" btn="two"></Button>
                <Button text="Delete" btn="three"></Button>
                <Button text="Mark as Paid" btn="one"></Button>
            </ItemWrap>
        </>
    );
}

export default CardInfo;
