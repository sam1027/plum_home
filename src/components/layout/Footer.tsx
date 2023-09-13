import { styled } from "styled-components";
import Logo from "./Logo";

const LogoDiv = styled.div`
    grid-area: 5 / 1 / 6 / 2;
`;

const InfoDiv = styled.div`
    grid-area: 5 / 2 / 6 / 7;
`;

const InfoFont = styled.span`
    font-family: 'DungGeunMo';
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