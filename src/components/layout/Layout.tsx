import { styled } from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const ParentDiv = styled.div`
    
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