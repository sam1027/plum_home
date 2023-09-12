import { styled } from "styled-components";
import Contents from "../components/layout/Contents";
import Slide from "../components/layout/Slide";

const SlideDiv = styled.div`
    grid-area: 2 / 1 / 3 / 7;
`;

const ContentsDiv1 = styled.div`
    grid-area: 3 / 1 / 4 / 3;
`;

const ContentsDiv2 = styled.div`
    grid-area: 3 / 3 / 4 / 5;
`;

const ContentsDiv3 = styled.div`
    grid-area: 3 / 5 / 4 / 7;
`;

const Main = () => {
    return (
        <>
            <SlideDiv>
                <Slide />
            </SlideDiv>
            
            <ContentsDiv1>
                <Contents />
            </ContentsDiv1>

            <ContentsDiv2>
                <Contents />
            </ContentsDiv2>

            <ContentsDiv3>
                <Contents />
            </ContentsDiv3>
        </>
    );
}
 
export default Main;