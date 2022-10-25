import { useParams } from "react-router-dom";
import { BlogItemDetails } from "./BlogDetails";

function BlogDetailsRoute(){
    const params=useParams()
    const id = params
   
  
    return <BlogItemDetails id={id}/>
}

export {BlogDetailsRoute}