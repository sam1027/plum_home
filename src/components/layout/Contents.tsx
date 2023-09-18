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

const LabelDiv = styled.div`
    padding: 10px;
`;

const Contents = () => {
    return (
        <ContentBox>
            <LabelDiv>
                <span>공지사항</span>
            </LabelDiv>
            <table>
                <th>header1</th>
                <th>header2</th>
                <tr>
                    <td>col1</td>
                    <td>col2</td>
                </tr>
                <tr>
                    <td>col3</td>
                    <td>col4</td>
                </tr>
            </table>
        </ContentBox>
    );
}
 
export default Contents;