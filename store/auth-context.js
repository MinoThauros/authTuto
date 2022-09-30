import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext=createContext({
    token:'',
    isAuthenticated:false,
    authenticate:()=>{},
    logout:()=>{}
});

const AuthContextProvider=({children})=>{
    const [authToken,setAuthToken]=useState();
    useEffect(()=>{
        AsyncStorage.getItem('token')
        .then((token)=>{
            if (token){
                setAuthToken(token)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    },[]);//as per roo structure, component will be initialized at the begining

    const authenticate=(token)=>{
        setAuthToken(token)
        AsyncStorage.setItem('token',token)
        ;
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