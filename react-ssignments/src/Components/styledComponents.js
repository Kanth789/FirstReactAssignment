import styled from "styled-components"

export const Heading  = styled.h2`
color:white;
font-family:"Roboto";
font-size:${(props)=>props.fontsize}px;


`;

export const Conatiner = styled.div`
background-image:url("${(props)=>props.imgUrl}");
height:100vh;
background-repeat: no-repeat;
background-repeat: no-repeat;
min-width: 683px;
background-size: 100%;
`