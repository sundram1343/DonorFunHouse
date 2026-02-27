import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
const Signup = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.SignupBlock}>
        <View style={styles.SignupContainer}>
          <Text style={styles.SignUpText}>Sign Up</Text>
          <Text style={styles.UsernameText}>Name</Text>
          <TextInput style={styles.Usernameinput}
            placeholder='Enter your Name'
            placeholderTextColor="#333333"
         />
          <Text style={styles.UsernameText}>Username</Text>
          <TextInput style={styles.Usernameinput}
            placeholder='Enter your Username'
            placeholderTextColor="#333333"
         />
          <Text style={styles.UsernameText}>Email</Text>
          <TextInput style={styles.Usernameinput}
            placeholder='Enter your Email'
            placeholderTextColor="#333333"
         />
          <Text style={styles.UsernameText}>Password</Text>
          <TextInput style={styles.Usernameinput}
            placeholder='Enter your Password'
            placeholderTextColor="#333333"
            secureTextEntry={true}
          />
          <Text style={styles.UsernameText}>Confirm Password</Text>
          <TextInput style={styles.Usernameinput}
            placeholder='Confirm your Password'
            placeholderTextColor="#333333"
            secureTextEntry={true}
          />
          <Pressable style={styles.SignUpButton} onPress={()=>console.log('Sign Up')}>
            <Text style={styles.SignUpButtonText}>Sign Up</Text>
          </Pressable>
          <Pressable onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.AlreadyUser}>Already have an account? Login Here</Text>
          </Pressable>
        </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  SignupBlock:{
    flex:1,
    backgroundColor:'#ffffff',
  },
  SignupContainer:{
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
  SignUpText:{
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
  Usernameinput:{
    borderWidth:1,
    borderColor:'#000000',
    width:350,
    height:40,
    borderRadius:10,
    color:"#333333",
    fontSize:16,
    backgroundColor: '#f9f9f99f',
  },
  SignUpButton:{
    marginTop:30,
    height:60,
    borderWidth:1,
    width:190,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'#2c2cabff',
  },
  SignUpButtonText:{
    color:'#ffffff',
    fontSize:30,
    fontWeight:'bold'
  },
  AlreadyUser:{
    marginTop:20,
    fontSize:20,
    color:'#0b0b52ff'
  }
})