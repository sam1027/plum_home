import { Link } from "react-router-dom";
import { keyframes, styled } from "styled-components";
import oc from 'open-color';

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const LogoKf = keyframes`
    0% {
        filter: blur(12px);
        opacity: 0;
    }
    100% {
        filter: blur(0px);
        opacity: 1;
    }
`;

const LogoSpan = styled.span`
    font-family: 'IAMAPLAYER';
    font-size: 45px;
    font-weight: 500;
    color: ${oc.violet[9]};
    animation: ${LogoKf} 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
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