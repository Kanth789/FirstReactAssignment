const BidonSuccess  = (
    response:Promise<any>,
    onSuccess:(data:any)=>void,
    onFailure:(err:any)=>void
)=>{
    response.then((data)=>{
        console.log(data,"bid")
        onSuccess(data)
    })
    .catch((err)=>{
        onFailure(err)
    })
}
export default BidonSuccess