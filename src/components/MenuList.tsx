import { styled } from "styled-components";

const MenuListDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 20%;
    text-align: left;
    cursor: pointer;
    border-left: 2px solid #e87900;
    min-height: 100px;
`;

const MenuTitleSpan = styled.span`
    padding: 5px;
    font-size: 15px;
`;

const MenuList = () => {
    return (
        <MenuListDiv>
            <MenuTitleSpan>소메뉴1</MenuTitleSpan>
            <MenuTitleSpan>소메뉴2</MenuTitleSpan>
            <MenuTitleSpan>소메뉴3</MenuTitleSpan>
            <MenuTitleSpan>소메뉴4</MenuTitleSpan>
        </MenuListDiv>
    );
}
 
export default MenuList;