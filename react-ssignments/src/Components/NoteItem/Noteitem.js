import { CardConatiner ,Text} from "./styledComponent"

const Noteitem = (props) =>{
    const{commentDetails} = props
    const {name,commentText} = commentDetails
    return(
        <>
        <CardConatiner> 
            <Text font="22px" fontweight="600" fontColor="#334155">{name}</Text>
            <Text font="18px">{commentText}</Text>
        </CardConatiner>
        </>
    )
}
export default Noteitem