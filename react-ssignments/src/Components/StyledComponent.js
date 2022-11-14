import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
export const MainConatiner = styled.div`
max-width: 800px;
display: block;
margin: auto;
text-align: center;
`

export const TextContent = styled.p`
font-size: ${(props)=>props.font};
font-weight: ${(props)=>props.weight};
`

export const ImageConatiner = styled.div`
width: 700px;
margin: auto;
`
export const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  font-family: Roboto;
}
`