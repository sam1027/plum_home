import { styled } from "styled-components";

interface MenuTitleProps {
    children: React.ReactNode;
    gridArea: string;
}

const MenuTitleDiv = styled.div<MenuTitleProps>`
    grid-area: ${props => props.gridArea};
`;

const MenuTitle = ({children, ...props}:MenuTitleProps) => {
    return (
        <MenuTitleDiv {...props}>
            <span>{children}</span>
        </MenuTitleDiv>
    );
}
 
export default MenuTitle;