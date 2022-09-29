import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import {createUser} from '../util/auth'

function SignupScreen() {
  const [isAuthenticating,setIsAuthenticating]=useState(false)//loading state

  const signupHandler=async ({email,password})=>{
    setIsAuthenticating(true)
    await createUser(email,password)
    setIsAuthenticating(false)
    


  }
  if (isAuthenticating){
    return <LoadingOverlay message={'Creating user...'} />

  }
  return <AuthContent onAuthenticate={signupHandler}/>;//the isLogin isn't passed
}

export default SignupScreen;
