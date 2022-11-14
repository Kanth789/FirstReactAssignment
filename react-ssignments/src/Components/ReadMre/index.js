import { useState } from "react"
import { GlobalStyle, ImageConatiner, MainConatiner, TextContent } from "../StyledComponent"

const ReadMore =()=>{
    const[number,setNumber] = useState(270)
    const[button,setterFun] = useState(false)
    const Para = "nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem"
    const slicedPara = Para.slice(0,number)
    const OnclickedButton = ()=>{
       
        setterFun((prevState)=>!button)
        if(button === true){
        setNumber(Para.length)
        }
        else{
            setNumber(270)
        }
    }
    
    return(
        <>
        <GlobalStyle/>
        <MainConatiner>
            <TextContent font="32px" weight="600">React Hooks</TextContent>
            <TextContent font="22px">Hooks are a new addition to React</TextContent>
            <ImageConatiner>
                <img src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png "/>
            </ImageConatiner>
            <TextContent font="22px">{slicedPara}</TextContent>
            <button onClick={OnclickedButton}>{button ? "ReadMore" :"Readless"}</button>
        </MainConatiner>
        </>
    )
}

export default ReadMore