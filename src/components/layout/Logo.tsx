import { Link } from "react-router-dom";
import { keyframes, styled } from "styled-components";
import oc from 'open-color';

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const LogoKf = keyframes`
    0% {
        letter-spacing: -0.6em;
        opacity: 0;
    }
    40% {
        opacity: 0.6;
    }
    100% {
        opacity: 1;
    }
`;

const LogoSpan = styled.span`
    font-family: 'IAMAPLAYER';
    font-size: 45px;
    font-weight: 500;
    color: ${oc.violet[9]};
    animation: ${LogoKf} 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
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