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
    flex-grow: 2;
`;

const NaviDiv = styled.div`
    display: inline-flex;
    flex-grow: 8;
`;

type UnderHeaderProps = {
    hoverMenu: string;
}
    
const UnderHeaderDiv = styled.div<UnderHeaderProps>`
    display: ${({hoverMenu}) => hoverMenu !== "" ? "flex !important" : "none !important"};
    height: 100px;
    background-color: white;
`;

const EmptyDiv = styled.div`
    flex-grow: 2;
    visibility: hidden;
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
        <>
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
            </HeaderDiv>

            <UnderHeaderDiv hoverMenu={hoverMenu}>
                <EmptyDiv>
                    <Logo />
                </EmptyDiv>
                <NaviDiv>
                    <MenuList />
                    <MenuList />
                    <MenuList />
                    <MenuList />
                    <MenuList />
                </NaviDiv>
            </UnderHeaderDiv>
            
            {/* <UnderHeaderDiv>
                <LogoDiv>
                </LogoDiv>
                <NaviDiv>
                    <MenuList />
                    <MenuList />
                    <MenuList />
                    <MenuList />
                    <MenuList />
                </NaviDiv>
            </UnderHeaderDiv> */}
        </>
    );
}
 
export default Header;