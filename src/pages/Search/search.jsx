import { Pressable, StyleSheet, Text, View,KeyboardAvoidingView,Image,ScrollView, TextInput,Platform  } from 'react-native'
import React, { useState } from 'react'
import HomeBottomNavBar from '../../components/HomeBottomNavBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
//image imports
import EmergencyFund from '../../assets/EmergencyFund.png'
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
          <Pressable style={styles.EmergencyFundBox} onPress={()=>navigation.navigate('Donation',{category:'FundRaisers'})}>
            <Image source={EmergencyFund} style={styles.EmergencyFund}/>
            <Text style={styles.EmergencyFundText}>Fundraisers</Text>
          </Pressable>
          <Pressable style={styles.UrgentBloodBox} onPress={()=>navigation.navigate('Donation',{category:'UrgentNeed'})}>
            <Text style={styles.UrgentBloodText}>Blood Needed</Text>
            <Text style={styles.UrgentBloodText}>Find Local Banks</Text>
          </Pressable>
          <Pressable style={styles.NGOMissionsBox} onPress={()=>navigation.navigate('Donation',{category:'NGO'})}>
            <Text style={styles.UrgentBloodText}>NGO Missions</Text>
            <Text style={styles.UrgentBloodText}>Join the NationWide Initiative</Text>
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
    width:'93%',
    marginLeft:15,
    borderWidth:1,
    borderRadius:10,
  },
  CategoriesBox:{
    gap:12,
    marginTop:10
  },
  EmergencyFund:{
    height:178,
    width:'100%',
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
    height:130,
    width:'93%',
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#e63746cc',
    zIndex:-1,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  UrgentBloodText:{
    fontSize:24,
    fontWeight:'700',
    color:'white'
  },
  NGOMissionsBox:{
    marginLeft:10,
    height:130,
    width:'93%',
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#000000be',
    zIndex:-1,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  }
})