import { styled } from "styled-components";
import Logo from "./Logo";

const LogoDiv = styled.div`
    grid-area: 1 / 1 / 2 / 2;
`;

const NaviDiv = styled.div`
    grid-area: 1 / 2 / 2 / 7;
`;

const Header = () => {
    return (
        <>
            <LogoDiv>
                <Logo />
            </LogoDiv>
            <NaviDiv>
                NaviDiv
            </NaviDiv>
        </>
    );
}
 
export default Header;