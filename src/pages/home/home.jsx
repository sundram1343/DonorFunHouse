import { StyleSheet, Text, View,ScrollView, Pressable } from 'react-native'
import React from 'react'
import { useAuth } from '../../Context/AuthContext'
import HomeBottomNavBar from '../../components/HomeBottomNavBar'
import Icon from 'react-native-vector-icons/AntDesign'
const home = () => {
  const {authUser}=useAuth();
  return (
    <>
      <View style={styles.container}>
        <HomeBottomNavBar/>
        <View>
      <Text style={styles.welcomeText}>Welcome, {authUser?.name}!</Text>
      <Text style={styles.ImpactMadeText}>Impact Made</Text>
      <View style={styles.Impactcontainer}>
        <View style={styles.impactbox}>
        <Text style={styles.ImpactText}>Total Donation Made</Text>
        <Text style={styles.ImpactValue}>6</Text>
        </View>
        <View style={styles.impactbox}>  
        <Text style={styles.ImpactText}>Total Campaign</Text>
        <Text style={styles.ImpactValue}>3</Text>
        </View>
      </View>
      <View style={styles.DonationContainer}>
          <Pressable style={styles.becomedonor}>
            <Icon name ="heart" style={styles.HeartIcon} size={25} color="#000000"/>
            <Text style={styles.becomedonorText}>Become a Donor</Text>
          </Pressable>
          <Pressable style={styles.StartFund}>
            <Icon name="user" style={styles.MoneyIcon} color="#000000"/>
            <Text style={styles.StartFundText}>Start a Fundraiser</Text>
          </Pressable>
      </View>
        </View>  
    </View>
    
    </>
  )
}

export default home

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    welcomeText: {
      marginTop:10,
      fontSize:30,
      fontFamily: 'Poppins-Bold',
    },
    ImpactMadeText: {
      fontSize:28,
      fontFamily: 'bold',
      marginTop:7,
      marginLeft:10,
      color:'#743131'
    },
    Impactcontainer:{
      flexDirection:'row',
      marginTop:10,
      marginLeft:10,
      gap:30,
    },
    impactbox:{
      borderWidth:1,
      borderRadius:10,
      height:100,
      width:180,
      borderColor:'#b2a8a8',
      flexDirection:'column',
      alignItems:'center',
    },
    ImpactText:{
      fontSize:20,
      marginTop:10,
      marginLeft:10,
      color:'#a85555',
      marginLeft:10,
    },
    ImpactValue:{
      fontSize:18,
      marginTop:10,
      marginLeft:10,
      color:'#808080',
    },
    DonationContainer:{
      flexDirection:'row',
      marginTop:20,
      gap:20,
      marginLeft:10,
    },
    becomedonor:{
      flexDirection:'column',
      borderWidth:1,
      borderRadius:10,
      height:120,
      width:150,
      borderColor:'#b2a8a8',
      alignItems:'center',
    },
    HeartIcon:{
      size:15,
      marginTop:20,

    },
    becomedonorText:{
      fontSize:18,
    }
})