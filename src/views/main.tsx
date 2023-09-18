import { styled } from "styled-components";
import Contents from "../components/layout/Contents";
import Slide from "../components/layout/Slide";

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const SlideDiv = styled.div`
    padding: 30px 0;
`;

const ContentsDiv = styled.div`
    display: inline-flex;
    justify-content: space-between;
`;

const Main = () => {
    return (
        <MainDiv>
            <SlideDiv>
                <Slide />
            </SlideDiv>
            
            <ContentsDiv>
                <Contents />
                <Contents />
                <Contents />
            </ContentsDiv>
        </MainDiv>
    );
}
 
export default Main;