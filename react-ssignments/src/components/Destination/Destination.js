const Destination = (props) =>{
    const {placeDeatils} = props
        return(
           
                <div className="box">
                    <div className="div1">
                        <img src={placeDeatils.imgUrl} className="imgUrl"></img>
                        <p className="div1-para">{placeDeatils.placeName}</p>
                    </div>
                </div>
          
        )
    }

export default Destination