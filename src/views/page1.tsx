import { styled } from "styled-components";

const Title = styled.h1`
    font-size: ${({theme}) => theme.fontSize.md };
    font-weight: 800;
    color: ${({theme}) => theme.color.blue };
`;

const Paragraph = styled.p`
    font-size: ${({theme}) => theme.fontSize.base };
    font-weight: 400;
    line-height: 1.5;
`;

const Button = styled.button`
    padding: 0.5em;
    border-radius: 6px;
    background-color: ${({theme}) => theme.color.white };
`;

const Page1 = () => {
    return (
        <>
            <Title>hello world</Title>
            <Paragraph>testestsssstestest</Paragraph>
            <Button>Button</Button>
        </>
    );
}
 
export default Page1;