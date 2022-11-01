/* eslint-disable jsx-a11y/iframe-has-title */
import Popup from 'reactjs-popup'
import {GrClose} from "react-icons/gr";
import 'reactjs-popup/dist/index.css'
const MovieSlider = (props)=>{
    const{movieData} = props
    const{uniqueNo,thumbnailUrl,videoUrl,categoryId} = movieData
    return(
        <div className="card">
            <Popup modal trigger={ <div className="card-img">
                <img src={thumbnailUrl} alt="card-img"/>
            </div>} >
            {close =>(<>
               <div className='video'>
               <div className='icon'>
                    <GrClose size="17px" 
                    style={{
                         padding:'10px'
                             }}
                    onClick={() => close()}/>
                </div>
                <div className='video-conatiner'>
                    <iframe width="620" height="315"
                            src={videoUrl} id="iframe" >
                    </iframe>
                </div>
                
               </div>

            </>)}


            </Popup>
           
        </div>
    )
}
export default MovieSlider