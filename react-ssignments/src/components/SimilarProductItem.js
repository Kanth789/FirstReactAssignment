const SimilarProductItem = (props)=>{
    const{similarProducts}= props
    const{total_reviews,title,brand,id,image_url,price,availability,description,rating} = similarProducts
    return(
        <>
        
        <div className="card-conatiner">
            <div className="card-img">
                <img src={image_url} alt="card-img"/>
            </div>
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-brand">
                <h6>{brand}</h6>
            </div>
            <div className="card-footer">
                <div className="card-price">
                    <h5>{price}</h5>
                </div>
                <div className="card-rating">
                    <p>{rating}</p>
                    <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star"
          />
                </div>
            </div>
        </div>
        </>
    )
}

export default SimilarProductItem