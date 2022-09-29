import AuthContent from '../components/Auth/AuthContent';
import {useState} from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { loginUser } from '../util/auth';
import { Alert } from 'react-native';

const LoginScreen=()=>{
  const [isAuthenticating,setIsAuthenticating]=useState(false)//loading state

  const loginHandler=async ({email,password})=>{
    setIsAuthenticating(true)
    try{
      await loginUser(email,password)
    }
    catch (error){
      console.log(error)//hook on error here
      Alert.alert('Authentication Failed', 'Could not log in you. Please check your credentials or try agaian later')
    }
    setIsAuthenticating(false)
    


  }
  if (isAuthenticating){
    return <LoadingOverlay message={'Loging you in...'} />

  }
  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;
