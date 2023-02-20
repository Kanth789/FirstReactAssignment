import React,{useRef,useState} from "react";
import Webcam from "react-webcam";
export const Camera = ()=>{
    const webcamRef = useRef(null);
    const [url, setUrl] = useState(null);
    const videoConstraints = {
        facingMode: "user"
      }
      const capturePhoto = React.useCallback(async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setUrl(imageSrc)
      }, [webcamRef])

      const onUserMedia = ()=>{
        console.log('photo clicked')
      }
    return(
        <>
     <Webcam
     ref={webcamRef}
     audio={true}
     screenshotFormat="image/jpeg"
     videoConstraints={videoConstraints}
     onUserMedia={onUserMedia}
     mirrored={true}
     minScreenshotHeight={200} 
     minScreenshotWidth={300}
     imageSmoothing={true}
     />
     <button onClick={capturePhoto}>Capture</button>
      <button onClick={() => setUrl(null)}>Refresh</button>
      {url && (
        <div>
          <img src={url} alt="Screenshot" />
        </div>
      )}
      </>
    )
}