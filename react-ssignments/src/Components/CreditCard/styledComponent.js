import styled from "styled-components";

import { createGlobalStyle } from "styled-components";
export const MainConatiner = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
height: 100vh;
`

export const Leftconatiner = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: ${(props)=>props.color};
padding: 20px;

`
export const RightConatiner = styled.div`
background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
background-repeat: no-repeat;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 60px;
border-radius: 13px;


`
export const Text = styled.h2`
font-size: ${(props) => props.font};
font-weight: 600;
text-transform:${(props) => props.text} ;

`
export const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  font-family: Roboto;

}
`