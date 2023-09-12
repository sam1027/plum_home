import { styled } from "styled-components";
import MenuTitle from "../MenuTitle";
import Logo from "./Logo";

const LogoDiv = styled.div`
    grid-area: 1 / 1 / 2 / 2;
`;

const NaviDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 0px;
    grid-area: 1 / 2 / 2 / 7;
`;

const Header = () => {
    return (
        <>
            <LogoDiv>
                <Logo />
            </LogoDiv>
            <NaviDiv>
                <MenuTitle gridArea='1 / 1 / 2 / 2'>대메뉴1</MenuTitle>
                <MenuTitle gridArea='1 / 2 / 2 / 3'>대메뉴2</MenuTitle>
                <MenuTitle gridArea='1 / 3 / 2 / 4'>대메뉴3</MenuTitle>
                <MenuTitle gridArea='1 / 4 / 2 / 5'>대메뉴4</MenuTitle>
                <MenuTitle gridArea='1 / 5 / 2 / 6'>로그인</MenuTitle>
            </NaviDiv>
        </>
    );
}
 
export default Header;