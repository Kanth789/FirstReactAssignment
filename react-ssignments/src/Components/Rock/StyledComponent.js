import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  background-color:#223a5f;
  color:#fff;
  
}
`;

export const CustomButton = styled.button`
padding:10px 30px;
background-color:#fff;
font-size:20px;
font-weight:600;
color:#223a5f;
border-radius:6px;
`

export const Heading = styled.h2`
font-size:${(props)=>props.size}px;
margin-bottom:2px;
margin-top:7px;

`