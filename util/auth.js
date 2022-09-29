import axios from "axios"
import { FireBaseSecrets } from "../secrets/Firebase";
//refine code

const {API_KEY,SignupUrl,SignInUrl}=new FireBaseSecrets()

export const createUser= async (email,password)=>{

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
    const response= await axios.post(SignInUrl.concat(API_KEY),
    {
        email:email,
        password:password,
        returnSecureToken:true
    }
    )
    console.log(response.data)

}