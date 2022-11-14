import styled from "styled-components";
export const MainConatiner = styled.div`
max-width: 800px;
display: block;
margin:auto ;


`
export const Text = styled.p`
font-size: ${(props)=>props.font};
font-weight: ${(props)=>props.weight};
color: ${(props)=>props.fontColor};
text-align: center;
`

export const TextContext = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding:  30px;
box-shadow: 0px 10px 5px rgba(0,0,0,0.1), 0px -10px 5px rgba(0,0,0,0.1),13px 0px 5px rgba(0,0,0,0.1);

`


export const CommentList = styled.div`
margin-top:70px;
display: grid;
grid-template-columns: auto auto;
grid-column-gap: 10px;
grid-row-gap: 14px;
`