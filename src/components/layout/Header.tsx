import { useState } from 'react';
import { keyframes, styled } from "styled-components";
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
    isHoverMenu: boolean;
}

const UnderHeaderKf = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(10px);
    }
`;
    
const UnderHeaderDiv = styled.div<UnderHeaderProps>`
    display: ${({isHoverMenu}) => isHoverMenu ? "flex !important" : "none !important"};
    height: 100px;
    background-color: white;
    animation: ${UnderHeaderKf} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;

const EmptyDiv = styled.div`
    flex-grow: 2;
    visibility: hidden;
`;
    
const Header = () => {
    const [isHoverMenu, setIsHoverMenu] = useState<boolean>(false);

    const onMenuEnterEvent = () => {
        setIsHoverMenu(true);
        console.log(`isHoverMenu: ${isHoverMenu}`);
    };

    const onMenuLeaveEvent = () => {
        setIsHoverMenu(false);
        console.log(`isHoverMenu: ${isHoverMenu}`);
    };

    return (
        <div
            onMouseEnter={onMenuEnterEvent}
            onMouseLeave={onMenuLeaveEvent}
        >
            <HeaderDiv>
                <LogoDiv>
                    <Logo />
                </LogoDiv>
                <NaviDiv>
                    <MenuTitle>
                        대메뉴1
                    </MenuTitle>
                    <MenuTitle>
                        대메뉴2
                    </MenuTitle>
                    <MenuTitle>
                        대메뉴3
                    </MenuTitle>
                    <MenuTitle>
                        대메뉴4
                    </MenuTitle>
                    <MenuTitle>
                        로그인
                    </MenuTitle>
                </NaviDiv>
            </HeaderDiv>

            <UnderHeaderDiv isHoverMenu={isHoverMenu}>
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
        </div>
    );
}
 
export default Header;