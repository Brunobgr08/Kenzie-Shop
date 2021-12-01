import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --cultured: #f2f3f7ff;
        --black-olive: #363732ff;
        --taupe-gray: #8c8a93ff;
        --blue-pigment: #38369aff;
        --zaffre: #0208a6ff;
        --white: #FFFFFF;
        --purple: #383597;
        --lightpurple: #7A77CF;
        --red: #ff3333;
    }

    body{
        background: var(--cultured);
        color: var(--taupe-gray);
    }

    body, input, button, p {
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Inter', sans-serif;
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
