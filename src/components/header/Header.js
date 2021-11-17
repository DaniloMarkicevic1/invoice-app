import {
    StyledHeader,
    Container,
    Logo,
    Avatar,
    Theme,
    VerticalLine,
    LogoBg,
} from '../styled/Header.styled';

import { LogoImg, AvatarImg, LightThemeImg, DarkThemeImg } from '../../Images';

function Header({ themeToggler }) {
    return (
        <StyledHeader>
            <LogoBg>
                <Logo src={LogoImg} />
            </LogoBg>

            <Container>
                <Theme onClick={themeToggler} className="hover">
                    <LightThemeImg className="light" />
                    <DarkThemeImg className="dark" />
                </Theme>

                <VerticalLine />

                <Avatar src={AvatarImg} />
            </Container>
        </StyledHeader>
    );
}

export default Header;
