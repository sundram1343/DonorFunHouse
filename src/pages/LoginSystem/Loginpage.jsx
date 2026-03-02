import { StyleSheet, Text, View,TextInput,Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
//import of pages
import {useAuth} from '../../Context/AuthContext'
//import of react packages
import { useNavigation } from '@react-navigation/native'
const LoginSystem = () => {
  const {authUser,setauthUser,IsLoggedIn,setIsLoggedIn}=useAuth();
  const [Username,setIsUsername]=useState('');
  const [Password, setIsPassword]=useState('');
  const handleLogin=()=>{

   try{
    if (Username === '' || Password === '') {      console.error('Enter vaild Details')
      return;
    }

    else if(Username==='admin'&&Password==='admin123'){
      setauthUser(
        'Sundram'
      );
      setIsLoggedIn(true);
    }
   }catch(error){
      console.error('Invalid Credintials',error);
  }
}
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.Loginblock}>
        <View style={styles.AlreadyUser}>
        <Text style={styles.LoginText}>Login</Text>
        <Text style={styles.UsernameText}>Username</Text>
        <TextInput style={styles.UsernameInput}
        placeholder='Enter your username' 
        placeholderTextColor="#333333"
        value={Username}
        onChangeText={(text)=>setIsUsername(text)}
        />
        <Pressable onPress={()=>console.log('Forgot Username')}>
        <Text style={styles.ForgotPassword}>Forgot Username?</Text>  
        </Pressable>      
        <Text style={styles.UsernameText}>Password</Text>
        <TextInput style={styles.UsernameInput}
          placeholder='Enter your password' 
          placeholderTextColor="#333333"
          secureTextEntry={true}
          value={Password}
          onChangeText={(text)=>setIsPassword(text)} 
        />
        <Pressable onPress={()=>console.log('Forgot Password')}>
        <Text style={styles.ForgotPassword}>Forgot Password?</Text>
        </Pressable>
        <Pressable style={styles.LoginButton} onPress={()=>handleLogin()}>
          <Text style={styles.LoginButtonText}>Login</Text>
        </Pressable>
        <Pressable onPress={()=>navigation.navigate('Signup')}>
          <Text style={styles.NewUser}>New User? Register Here</Text>
        </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default LoginSystem
const styles = StyleSheet.create({
  Loginblock:{
    flex:1,
    backgroundColor:'#ffffff',
  },
  AlreadyUser:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    gap:10,
    marginTop:150,
    marginHorizontal:20,
    borderRadius:10,
    padding:20,
    height:480,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
LoginText:{
  marginTop:-90,
  fontSize:50,
  color:'#0c0c9fff',
  fontWeight:'bold'
},
UsernameText:{
  marginTop:5,
  marginRight:255,
  fontSize:20,
  fontWeight:'500',
  color:'#333333'
},
UsernameInput:{
  borderWidth:1,
  borderColor:'#000000',
  width:350,
  height:40,
  borderRadius:10,
  color:"#333333",
  fontSize:16,
  backgroundColor: '#f9f9f99f',
},
ForgotPassword:{
  marginLeft:215,
  fontSize:17,
  color:'#0b0b52ff'
},
LoginButton:{
  marginTop:30,
  height:60,
  borderWidth:1,
  width:190,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:10,
  backgroundColor:'#2c2cabff',
},
LoginButtonText:{
  color:'#ffffff',
  fontSize:30,
  fontWeight:'bold'
},
NewUser:{
  marginTop:20,
  fontSize:20,
  color:'#0b0b52ff'
}

})