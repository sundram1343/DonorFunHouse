import { Pressable, StyleSheet, Text, View,KeyboardAvoidingView,Image } from 'react-native'
import React, { useState } from 'react'
import HomeBottomNavBar from '../../components/HomeBottomNavBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
//image imports
import EmergencyFund from '../../assets/EmergencyFund.png'
import UrgentBlood from '../../assets/UrgentBlood.png'
const search = () => {
  const navigation=useNavigation();
  const [Active,setActive]=useState()
  const [Search,setSearch]=useState('')
  return (
    <KeyboardAvoidingView  style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <SafeAreaView style={{flex:1}}>
      <Text>Find Your Imapct</Text>
      <Pressable>
        <TextInput
          placeholder='Search for blood type, Hospital or FundRaiser'
          placeholderTextColor='#333333'
          value={Search}
          onChangeText={(text)=>setSearch(text)}
        />
      </Pressable>      
      <ScrollView>
        <Text style={styles.CategoryText}>Categories</Text>
        <View style={styles.CategoriesBox}>
          <Pressable style={styles.EmergencyFundBox}>
            <Image source={EmergencyFund} style={styles.EmergencyFund}/>
            <Text style={styles.EmergencyFundText}>Fundraisers</Text>
          </Pressable>
          <Pressable style={styles.UrgentBloodBox}>
            <Image souce={UrgentBlood} style={styles.UrgentBlood}/>
            <Text>Blood Needed</Text>
            <Text>Find Local Banks</Text>
          </Pressable>
          <Pressable>
            <Text>NGO Missions</Text>
            <Text>Join the NationWide Initiative</Text>
          </Pressable>
        </View>
      </ScrollView>
     <HomeBottomNavBar/>
    </SafeAreaView>
    </KeyboardAvoidingView>
  )
}
export default search
const styles = StyleSheet.create({
  CategoryText:{
    marginTop:10,
    marginLeft:10,
    fontSize:30,
    fontWeight:'bold'
  },
  EmergencyFundBox:{
    height:180,
    width:390,
    marginLeft:10,
    borderWidth:1,
    borderRadius:10,
  },
  CategoriesBox:{
    gap:12,
    marginTop:10
  },
  EmergencyFund:{
    height:178,
    width:387,
    borderRadius:10,
    zIndex:-1,
  },
  EmergencyFundText:{
    marginTop:-100,
    marginLeft:15,
    fontSize:36,
    fontWeight:'700',
  },
  UrgentBloodBox:{
    marginLeft:10,
  }
})