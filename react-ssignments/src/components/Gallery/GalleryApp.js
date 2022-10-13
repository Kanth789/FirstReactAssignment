const GalleryApp = (props) =>{
    const {ImageList,OnClickedApp} = props
    const {ImgUrl,uniqueNo} = ImageList
    const OnClicked = () =>{
        OnClickedApp(ImgUrl)
    }
    return(

                <div className="img1">
                    <img src={ImgUrl} onClick={OnClicked}></img>
                </div>

    )
}
export default GalleryApp