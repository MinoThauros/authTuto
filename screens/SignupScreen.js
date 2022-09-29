import { useState,useContext } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import {createUser} from '../util/auth';
import {AuthContext} from '../store/auth-context'


function SignupScreen() {
  const [isAuthenticating,setIsAuthenticating]=useState(false)//loading state
  const AuthCtx=useContext(AuthContext)

  const signupHandler=async ({email,password})=>{
    setIsAuthenticating(true)
    try{
      const {idToken}= await createUser(email,password);
      AuthCtx.authenticate(idToken)
      console.log('token is',idToken)


    }catch (error) {
      console.log(error)//hook on error here
      Alert.alert('Authentication Failed', 'Could not log in you. Please check your credentials or try again later')
      setIsAuthenticating(false)
    }
    
  }
  if (isAuthenticating){
    return <LoadingOverlay message={'Creating user...'} />

  }
  return <AuthContent onAuthenticate={signupHandler}/>;//the isLogin isn't passed
}

export default SignupScreen;
