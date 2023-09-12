import { styled } from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const ParentDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 20px;
`;
interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}:LayoutProps) => {
    return (
        <ParentDiv>
            <Header />
            {children}
            <Footer />
        </ParentDiv>
    );
}
 
export default Layout;