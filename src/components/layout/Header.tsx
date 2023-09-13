import { useState } from 'react';
import { styled } from "styled-components";
import MenuList from '../MenuList';
import MenuTitle from "../MenuTitle";
import Logo from "./Logo";

const HeaderDiv = styled.div`
    display: flex;
    height: 80px;
`;

const LogoDiv = styled.div`
    flex-grow: 1;
`;

const NaviDiv = styled.div`
    display: inline-flex;
    flex-grow: 9;
`;

const MenuDiv = styled.div`
    // display: grid;
    // grid-template-columns: repeat(6, 1fr);
    // grid-template-rows: 1fr;
    // grid-column-gap: 10px;
    // grid-row-gap: 0px;

    // background-color: blue;
    // width: 100%;
    // position: absolute;
    // top: 75px;
    // padding: 20px;
`;

const Header = () => {
    const [hoverMenu, setHoverMenu] = useState<string>('');

    const onMenuEnterEvent = (id: string) => {
        setHoverMenu(id);
        console.log(`mouse enter: ${hoverMenu}`);
    };

    const onMenuLeaveEvent = () => {
        setHoverMenu('');
        console.log(`mouse leave: ${hoverMenu}`);
    };

    return (
        <HeaderDiv>
            <LogoDiv>
                <Logo />
            </LogoDiv>
            <NaviDiv>
                <MenuTitle 
                    onMouseEnter={() => onMenuEnterEvent('1')}
                    onMouseLeave={onMenuLeaveEvent}
                >
                    대메뉴1
                </MenuTitle>
                <MenuTitle 
                    onMouseEnter={() => onMenuEnterEvent('2')}
                    onMouseLeave={onMenuLeaveEvent}
                >
                    대메뉴2
                </MenuTitle>
                <MenuTitle 
                    onMouseEnter={() => onMenuEnterEvent('3')}
                    onMouseLeave={onMenuLeaveEvent}
                >
                    대메뉴3
                </MenuTitle>
                <MenuTitle 
                    onMouseEnter={() => onMenuEnterEvent('4')}
                    onMouseLeave={onMenuLeaveEvent}
                >
                    대메뉴4
                </MenuTitle>
                <MenuTitle>
                    로그인
                </MenuTitle>
            </NaviDiv>
            {/* <MenuDiv>
                <MenuList />
                <MenuList />
                <MenuList />
                <MenuList />
            </MenuDiv> */}
        </HeaderDiv>
    );
}
 
export default Header;