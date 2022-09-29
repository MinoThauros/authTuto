import AuthContent from '../components/Auth/AuthContent';
import {useState,useContext} from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { loginUser } from '../util/auth';
import { Alert } from 'react-native';
import {AuthContext} from '../store/auth-context'

const LoginScreen=()=>{
  const [isAuthenticating,setIsAuthenticating]=useState(false)//loading state
  const AuthCtx=useContext(AuthContext)

  const loginHandler=async ({email,password})=>{
    setIsAuthenticating(true)
    try{
      const {idToken}=await loginUser(email,password)
      AuthCtx.authenticate(idToken)
      console.log('token is',idToken)
    }
    catch (error){
      console.log(error)//hook on error here
      Alert.alert('Authentication Failed', 'Could not log in you. Please check your credentials or try again later')
    }
    setIsAuthenticating(false)
    


  }
  if (isAuthenticating){
    return <LoadingOverlay message={'Loging you in...'} />

  }
  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;
