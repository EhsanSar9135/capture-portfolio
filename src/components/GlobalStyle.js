import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lobster&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;
    }
    button {
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: #fff;
        transition: all 0.5s ease;
        font-family: 'Inter', sans-serif;
        &:hover {
            background: #23d997;
            color: #fff;
        }
    }
    h2 {
        font-weight: lighter;
        font-size: 3rem;
    }
    h3 {
        color: #fff;
    }
    h4 {
        font-weight: bold;
    }
    a {
        font-size: 1rem;
    }
    span {
        font-weight: bold;
        color: #23d997;
    }
    p {
        padding: 3rem 0;
        color: #ccc;
        font-size: 1.1rem;
        line-height: 150%;
    }
`;

export default GlobalStyle;
