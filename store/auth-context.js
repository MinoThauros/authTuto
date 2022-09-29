import { createContext, useState } from "react";

export const AuthContext=createContext({
    token:'',
    isAuthenticated:false,
    authenticate:()=>{},
    logout:()=>{}
});

const AuthContextProvider=({children})=>{
    const [authToken,setAuthToken]=useState();

    const authenticate=(token)=>{
        setAuthToken(token)
    };

    const logout=()=>{
        setAuthToken(null);
    }

    const value={
        token:authToken,
        isAuthenticated:!!authToken,//truty or falsy into true or false
        authenticate:authenticate,
        logout:logout
    };


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    //so we can wrap it aeound children

};

export default AuthContextProvider;