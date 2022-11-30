const responseApi = (response)=>{
    return new Promise(async(reslove,reject)=>{
        const responseData = await response.json()
        if(response.ok){
            reslove(responseData)
        }
        else{
            reject(responseData.error_msg)
        }
    })
}
export default responseApi