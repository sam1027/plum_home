import { styled } from "styled-components";

const ContentBox = styled.div`
    flex-basis: 30%;
    box-shadow:
        0.6px 0.6px 5.3px -2px rgba(0, 0, 0, 0.067),
        2.7px 2.7px 14.6px -2px rgba(0, 0, 0, 0.134),
        16px 16px 37px -2px rgba(0, 0, 0, 0.19)
    ;
    border-radius: 5px;
`;

const Contents = () => {
    return (<ContentBox>Contents</ContentBox>);
}
 
export default Contents;