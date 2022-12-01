const resloveTime = (data:any)=>{
    console.log(data,"reslove")
    return new Promise((reslove:(data:any)=>void)=>setTimeout(()=>reslove(data),3000))
}
export default resloveTime