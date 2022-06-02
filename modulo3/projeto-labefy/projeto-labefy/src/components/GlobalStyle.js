import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    .card{
        display: flex;
        border: 1px solid black;
        min-width: 360px;
        justify-content: space-around;
        padding: 5px;
    }

    .card:hover{
        background-color: gainsboro;
    }
`

export default GlobalStyle