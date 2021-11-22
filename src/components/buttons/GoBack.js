import { ArrowLeft } from '../../Images';
import { GoBackWrap, GoBackButton } from '../styled/CardInfo.styled';
import { useContext } from 'react';
import Context from '../../contexts/context';

function GoBack() {
    const { setShow } = useContext(Context);

    return (
        <GoBackWrap className="hover" onClick={() => setShow('cardList')}>
            <ArrowLeft />
            <GoBackButton>Go Back</GoBackButton>
        </GoBackWrap>
    );
}

export default GoBack;
