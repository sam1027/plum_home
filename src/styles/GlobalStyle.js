import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --font-size-md: 1.5rem;
        --font-size-base: 1.125rem;
        --color-white: white; // 간단하게 white로 설정했지만, 보통은 rgb값이나 hex값으로 설정합니다.
        --color-blue: blue;
    }
`;

export default GlobalStyle;