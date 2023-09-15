import { styled } from "styled-components";

interface MenuTitleProps {
    children: React.ReactNode;
}

const MenuTitleDiv = styled.div<MenuTitleProps>`
    flex-basis: 20%;
    text-align: center;
    cursor: pointer;
`;

const MenuTitleSpan = styled.span`
    line-height: 80px;
    vertical-align: middle;
    font-size: 18px;
`;

const MenuTitle = ({children, ...props}:MenuTitleProps) => {
    return (
        <MenuTitleDiv {...props}>
            <MenuTitleSpan>{children}</MenuTitleSpan>
        </MenuTitleDiv>
    );
}
 
export default MenuTitle;