import styled from "styled-components";

export const CardConatiner = styled.div`
border: 1px solid #000;
padding: 10px 20px;
`

export const Text = styled.p`
font-size: ${(props)=>props.font};
font-weight: ${(props)=>props.fontweight};
color: ${(props)=>props.fontColor};
`