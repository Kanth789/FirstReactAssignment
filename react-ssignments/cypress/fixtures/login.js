const Login = (status)=>{
    if(status === 'success')
    {
        return {statusCode : 200,
        body:{
          jwt_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU"

        }
    }
    }
    else if(status === 'invalid-username')
    {
        return{
            statusCode : 401,
            body:{
                error_msg:"Enter the Valid UserName"
            }
        }
    }
    else if(status === 'invalid-password'){
        return{
            statusCode : 400,
            body:{
                error_msg:"Enter the Valid Password"
            }
        }
    }
}
export default Login