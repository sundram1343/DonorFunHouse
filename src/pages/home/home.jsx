import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthProvider, useAuth } from '../../Context/AuthContext'
import HomeBottomNavBar from '../../components/HomeBottomNavBar'
const home = () => {
    const {authUser}=useAuth();
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.welcomeText}> Welcome, {authUser?.name || 'User'}!</Text>
        <Text style={styles.ImpactMadeText}>Impact Made</Text>
        <ScrollView style={styles.Impactcontainer}>
        <Text style={styles.ImpactText}>Number of Donation</Text>
        <Text style={styles.ImpactValue}>4</Text>
        <Text style={styles.ImpactText}>Number of Lives Saved</Text>
        <Text style={styles.ImpactValue}>10</Text>
        <Text style={styles.ImpactText}>Number of Funds Raised</Text>
        <Text style={styles.ImpactValue}>1</Text>
      </ScrollView>
        <HomeBottomNavBar/>
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

    }
})