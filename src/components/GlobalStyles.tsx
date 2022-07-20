import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
 --primary-background:#fcfcfc;
 --header-background:#ffffff;
 --shadows-color:#d9d9d9;
 --additional-color:#c6c6c6;
}
*{
 box-sizing:border-box;
 margin:0;
 padding:0;
}
body{

 background:var(--primary-background);
 color:black;
}
`;

export default GlobalStyles;
