import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

  @font-face {
    font-family: "Motiva Sans Light";
    src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
    font-style: normal;
  }

  @font-face {
    font-family: "Motiva Sans Bold";
    src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
    font-style: normal;
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    font-family: 'Motiva Sans Light', sans-serif;
    box-sizing: border-box;
    background: #fff;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: #2E186A;

    &:hover {
      color: #18216d;
    }
  }

  input, textarea {
    border-radius: 4px;
    border: 0;
    background: rgb(241, 242, 243);
    transition: all 0.3s ease-in-out;
    width: 100%;
    outline: none;

    :focus-within {
      background: none;
      box-shadow: #2e186a 0px 0px 0px 1px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Motiva Sans Bold', serif;
    color: #18216d;
    font-size: 56px;
    line-height: 1.18;

    @media only screen and (max-width: 890px) {
      font-size: 47px;
    }

    @media only screen and (max-width: 414px) {
      font-size: 32px;
    }
  }

  p {
    color: #18216d;
    font-size: 21px;
    line-height: 1.41;
  }

  .ant-drawer-body {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-top: 1.5rem;
  }

  .ant-drawer-content-wrapper {
    width: 300px !important;
  }
`;