import { PrimaryButton } from '../styled/PrimaryButton.styled';

function Button({ bg, text, textCollor }) {
    return (
        <PrimaryButton bg={bg} textCollor={textCollor} className="hover">
            {text}
        </PrimaryButton>
    );
}

export default Button;
