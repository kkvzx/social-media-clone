import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
 --primary-background:#f9f9f9;
 --header-background:#ffffff;
 --shadows-color:#d9d9d9;
 --comments-color:#8E9E9E;
 --additional-color:#e9e9e9;
 --secondary-color:#0095f6;
 --font-color:#262626;
 --bold-weight:600;
 --regular-weight:400;
}
*{
 box-sizing:border-box;
 margin:0;
 padding:0;
 font-family:'Inter', sans-serif;
}
body{

 background:var(--primary-background);
 color:black;
 overflow-x:hidden;
}
`;

export default GlobalStyles;
