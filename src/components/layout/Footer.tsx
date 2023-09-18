import { styled } from "styled-components";
import Logo from "./Logo";
import oc from 'open-color';

const FooterDiv = styled.div`
    display: flex;
    height: 80px;
    background-color: ${oc.gray[3]};
    margin-top: 50px;
`;

const LogoDiv = styled.div`
    flex-grow: 2;
`;

const InfoDiv = styled.div`
    flex-grow: 8;
    display: inline-flex;
    padding: 10px;
`;

const InfoFont = styled.span`
    font-family: 'DungGeunMo';
    font-size: 15px;
`;

const Footer = () => {
    return (
        <FooterDiv>
            <LogoDiv>
                <Logo />
            </LogoDiv>
            <InfoDiv>
                <InfoFont>ⓒ 2023. PLUM Co. All rights reserved.</InfoFont>
            </InfoDiv>
        </FooterDiv>
    );
}
 
export default Footer;