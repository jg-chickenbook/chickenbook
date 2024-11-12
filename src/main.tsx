import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}    

#root {
        width: 100%;
        height: 100%;
    }
    :root {
    --color-primary: #FFFA72;
    --color-primary-200: #FBFCD3;
    --color-secondary: #000000;
    --color-light: #ffff;
    --color-text: #000000;
    --color-text-500: #808080;
    --color-text-700: #6f6f6f;
    --color-text-900: #191919;
    --color-title: #000000;
    --color-subtitle: #6F3BFF;
    --color-button: #C6A4FA;
    --color-button-hover: #B38FF2;
    --color-button-active: #C39EFF;
    --detail-heading: #5754FF;
    --link-color: #6F3BFF;
    --link-color-hover: #5a35c0;
    --link-color-active: #826cfa;
    }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
