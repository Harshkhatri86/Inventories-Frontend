import React from 'react' ; 

interface AuthProviderProps{
    children : React.ReactNode ; 
}

function AuthProvider({children} : AuthProviderProps){
    const token = sessionStorage.getItem("Token") ; 
    if(!token){
        window.location.pathname = "/login"
        return  null; 
    }
    return <div>{children}</div>
}

export default AuthProvider