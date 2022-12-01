const responseApi = (response: Response)=>{
    return new Promise(async(reslove,reject)=>{
        const responseData = await response.json()
        // console.log(responseData,"response api")
        if(response.ok){
            reslove(responseData)
        }
        else{
            reject(responseData.error_msg)
        }
    })
}
export default responseApi