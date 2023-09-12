import { styled } from "styled-components";
import Logo from "./Logo";

const LogoDiv = styled.div`
    grid-area: 4 / 1 / 5 / 2;
`;

const InfoDiv = styled.div`
    grid-area: 4 / 2 / 5 / 7;
`;

const InfoFont = styled.span`
    font-size: 15px;
`;

const Footer = () => {
    return (
        <>
            <LogoDiv>
                <Logo />
            </LogoDiv>
            <InfoDiv>
                <InfoFont>ⓒ 2023. PLUM Co. All rights reserved.</InfoFont>
            </InfoDiv>
        </>
    );
}
 
export default Footer;