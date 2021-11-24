import styled from 'styled-components';

export const PrimaryButton = styled.button`
    background-color: ${({ theme, btn }) =>
        (btn === 'new' && theme.colors.btnPrimary) ||
        (btn === 'one' && theme.colors.btnPrimary) ||
        (btn === 'two' && theme.colors.backgroundSecondary) ||
        (btn === 'three' && theme.colors.btnDelete) ||
        (btn === 'four' && theme.colors.lightGray) ||
        (btn === 'newItem' && theme.colors.backgroundSecondary)};
    color: ${({ theme, btn }) =>
        btn !== 'newItem' ? theme.colors.white : theme.colors.hashtag};
    border-radius: ${({ theme }) => theme.radius.btnRadius};
    padding: ${({ btn }) =>
        (btn === 'new' && '15px 14px 14px 46px') ||
        // PinkButton
        (btn === 'one' && '17px 0px 16px 0px') ||
        //Dark Button
        (btn === 'two' && '17px 0px 16px 0px') ||
        // Orange Button
        (btn === 'three' && '17px 0px 16px') ||
        (btn === 'four' && '') ||
        // Add Newitem Button
        (btn === 'newItem' && '17px 0 16px')};
    margin: ${({ btn }) => btn === 'newItem' && '24px 0 88px 0'};
    width: 100%;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-height: ${({ theme }) => theme.lineHeight.s};
    font-size: ${({ theme }) => theme.font.size.s};
    border: none;
    outline: none;
    text-align: center;
    grid-area: ${({ btn }) =>
        (btn === 'two' && 'two') ||
        (btn === 'four' && 'four') ||
        (btn === 'three' && 'second') ||
        (btn === 'one' && 'third')};
`;
