import { PrimaryButton } from '../styled/PrimaryButton.styled';

function Button({ text, btn }) {
    return (
        <PrimaryButton btn={btn} className="hover">
            {text}
        </PrimaryButton>
    );
}

export default Button;
