import { Mobile, PC } from "../../Responsive";

interface ResponsiveProps {
    children: React.ReactElement;
}

const Responsive = ({children}:ResponsiveProps) => {
    return (
        <>
            <Mobile>
                {children}
            </Mobile>
            <PC>
                {children}
            </PC>
        </>
    );
}
 
export default Responsive;