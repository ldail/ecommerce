import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 10px;
    box-sizing: border-box;

    @media screen and (min-width: 768px) {
        padding: 20px 60px;
    }


}

a {
    color: black;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
`;

export default GlobalStyle;