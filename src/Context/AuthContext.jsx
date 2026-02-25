import React,{useState,useEffect,useContext} from 'react'
const AuthContext=React.createContext();
export function useAuth(){
    return useContext(AuthContext);
}
export function AuthProvider(props){
    const [authUser,setauthUser]=useState(null);
    const [IsLoggedIn,setIsLoggedIn]=useState(false);
    const value={
        authUser,
        setauthUser,
        IsLoggedIn,
        setIsLoggedIn
    }
    return(
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}