const BannerProfile = (props) =>{
    const {bannerDetails} = props
    return(
        <div className={bannerDetails.className}>
            <div className="firstPart">
                <h4 className="first-heading">{bannerDetails.heading}</h4>
                <p className="first-para">{bannerDetails.para}</p>
                <button className="first-button">Show More</button>
            </div>
            <div className="SecondPart">
                <img src={bannerDetails.imgUrl}></img>
            </div>
        </div>
    )
}

export default BannerProfile