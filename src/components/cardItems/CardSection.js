import { Route, Routes } from 'react-router-dom';

import CardInfo from './CardInfo';
import CardList from './CardList';
import AddSection from './AddSection';
import Form from '../form/Form';

function CardSection() {
    return (
        <>
            <Routes>
                <Route path="/" element={<CardList />} />
                <Route path="/" element={<AddSection />} />

                <Route path="/cardInfo" element={<CardInfo />} />

                <Route path="/add-new" element={<Form type="add-new" />} />
                <Route path="/edit" element={<Form type="edit" />} />
            </Routes>
        </>
    );
}

export default CardSection;
