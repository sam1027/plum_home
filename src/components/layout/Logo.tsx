import { Link } from "react-router-dom";
import { styled } from "styled-components";
import oc from 'open-color';

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const LogoSpan = styled.span`
    font-size: 30px;
    font-weight: 500;
    color: ${oc.violet[9]};
`;

const Logo = () => {
    return (
        <StyledLink to="/">
            <LogoSpan>
                PLUM
            </LogoSpan>
        </StyledLink>
    );
}
 
export default Logo;