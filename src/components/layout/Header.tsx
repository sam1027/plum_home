import { styled } from "styled-components";
import oc from 'open-color';
import { Link } from "react-router-dom";

const HeaderDiv = styled.div`
    width: 100%;
    border-bottom: 2px solid ${oc.violet[4]};
`;

const Logo = styled.span`
    font-size: 50px;
    font-weight: 500;
    color: ${oc.violet[9]};
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const Header = () => {
    return (
        <HeaderDiv>
            <StyledLink to="/">
                <Logo>
                    PLUM
                </Logo>
            </StyledLink>
        </HeaderDiv>
    );
}
 
export default Header;