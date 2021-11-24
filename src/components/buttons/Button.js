import { PrimaryButton } from '../styled/PrimaryButton.styled';

function Button({ text, btn, onClick }) {
    return (
        <PrimaryButton btn={btn} className="hover" onClick={onClick}>
            {text}
        </PrimaryButton>
    );
}

export default Button;
