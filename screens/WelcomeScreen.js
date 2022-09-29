import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useEffect,useState,useContext } from 'react';
import {AuthContext} from '../store/auth-context'

function WelcomeScreen() {
  const {token}=useContext(AuthContext)
  const [fetchedMessage,setFetchedMessage]=useState('')
  useEffect(()=>{
    axios.get('https://bgetapp-default-rtdb.firebaseio.com/message.json?auth='+token)
    //adding token to satisfy rule
    //the token is the ticket to get access
    .then((response)=>{
      console.log(response.data)
      setFetchedMessage(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[token])
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
