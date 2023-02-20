import React from "react"
import { ReactMediaRecorder } from "react-media-recorder"

import { useReactMediaRecorder } from "react-media-recorder"

// export const Video = ()=>{
//     return(
//         <ReactMediaRecorder video 
//         render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
//             <div>
//               <p>{status}</p>
//               <button onClick={startRecording}>Start </button>
//               <button onClick={stopRecording}>Stop </button>
//               <video src={mediaBlobUrl} controls autoPlay loop />
//             </div>
//           )}/>
//     )
// }


export const Video = ()=>{
    const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ video: true }) /// hook

  return (
    <div>
      <p>{status}</p>
      <button onClick={startRecording}>Start </button>
      <button onClick={stopRecording}>Stop </button>
      <video src={mediaBlobUrl} controls autoPlay loop />
    </div>
  )
}