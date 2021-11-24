import { Link } from 'react-router-dom';

import { ArrowLeft } from '../../Images';

import { GoBackWrap, GoBackButton } from '../styled/CardInfo.styled';

function GoBack({ to }) {
    return (
        <Link to="/">
            <GoBackWrap className="hover">
                <ArrowLeft />
                <GoBackButton>Go Back</GoBackButton>
            </GoBackWrap>
        </Link>
    );
}

export default GoBack;
