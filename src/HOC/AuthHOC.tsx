import React from 'react'

const AuthHOC=(WrappedComponent:any)=>{
return(props:any)=>{
const token=localStorage.getItem("token");
if(!token){
window.location.replace("/z");
return null;
}
else{
    return <WrappedComponent {...props}/>
}
}
}

export default AuthHOC;