import styled from 'styled-components';

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const StyledCheckbox = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    background: ${(props) => (props.checked ? '#7C5DFA' : '#1E2139')};
    border-radius: ${({ theme }) => theme.radius.checkbox};
    transition: all 150ms;

    ${HiddenCheckbox}:hover + & {
        box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.btnPrimary};
    }

    ${Icon} {
        visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
        transform: unset;
        transition: 50ms;
    }
`;

function Checkbox({ name, checked, className, ...props }) {
    return (
        <CheckboxContainer className={className}>
            <HiddenCheckbox checked={checked} {...props} />
            <StyledCheckbox checked={checked}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
            </StyledCheckbox>
        </CheckboxContainer>
    );
}

export default Checkbox;
