import axios from "axios"
import { FireBaseSecrets } from "../secrets/Firebase";


export const createUser= async (email,password)=>{

    const {API_KEY,SignupUrl}=new FireBaseSecrets()
    console.log(SignupUrl.concat(API_KEY))


        const response=await axios.post(SignupUrl.concat(API_KEY),
    {
        email:email,
        password:password,
        returnSecureToken:true
    })

    }
    
//for next workflows, I could return a status object
export const loginUser=async (email,password)=>{

}