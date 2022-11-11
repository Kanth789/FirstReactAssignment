import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
export const MainConatiner = styled.div`
background-color: #24263c;
height: 100vh;
`

export const SecondConatiner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
background-color:#383a4e ;
`

export const Text = styled.h2`
font-size: ${(props) => props.font};
color:${(props) => props.color};


`

export const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  font-family: Roboto;
}
`