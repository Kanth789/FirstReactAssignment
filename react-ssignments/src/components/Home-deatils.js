 export const HomeDeatils = (props) =>{
    const{postDetails} = props
    const{post,para,date} = postDetails
    return(
        <>
        <div className="div-1">
            <div className="part1">
                <h4 className="post">{post}</h4>
                <h4 className="part1-date">{date}</h4>
            </div>
            <div className="part2">
                <h5>{para}</h5>
            </div>
        </div>
        <hr></hr>
        </>
    )
}