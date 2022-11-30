const resloveTime = (data:any)=>{
    return new Promise((reslove:(data:any)=>void)=>setTimeout(()=>reslove(data),3000))
}
export default resloveTime