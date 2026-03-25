import { StyleSheet, Text, View ,Image,ScrollView, Pressable} from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
//image import
import Bg_Image from '../assets/Bg-Image-DonationPage.png'
import WaterDroplet from '../assets/WaterDroplet.png'
import EducationHat from'../assets/Education.png';
import MedicalKit from '../assets/HealthKit.png'
import { SafeAreaView } from 'react-native-safe-area-context'
const NGO = () => {
  const [Amount, issetAmount]=useState()
  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
      <View style={styles.Conatiner}>
        <Image source={Bg_Image} style={styles.Bg_Image}/>
        <Text style={styles.IntroText}>Our mission is to bridge the gap between resources and those who needthem most. From education initiatives to clean water projects, every dollar you contribute to the DonorFunHouse general fund helps us respond instantly to Our Country's emergencies.</Text>
      </View>
      <View style={styles.DonationBox}>
        <Text style={styles.Choosetext}>Choose Amount</Text>
        <View style={styles.amountChoose}>
          <Pressable style={[styles.AmountBox,Amount==='100'&&styles.Active]}onPress={()=>issetAmount('100')}>
            <Text style={[Amount==='100'?styles.ActiveText:styles.InactiveText]}>Rs.100</Text>
          </Pressable>
          <Pressable style={[styles.AmountBox,Amount==='250'&&styles.Active]}onPress={()=>issetAmount('250')}>
            <Text style={[Amount==='250'?styles.ActiveText:styles.InactiveText]}>Rs.250</Text>
          </Pressable>
          <Pressable style={[styles.AmountBox,Amount==='500'&&styles.Active]}onPress={()=>issetAmount('500')}>
            <Text style={[Amount==='500'?styles.ActiveText:styles.InactiveText]}>Rs.500</Text>
          </Pressable>
          <Pressable style={[styles.AmountBox,Amount==='1000'&&styles.Active]}onPress={()=>issetAmount('1000')}>
            <Text style={[Amount==='1000'?styles.ActiveText:styles.InactiveText]}>Rs.1000</Text>
          </Pressable>
          <Pressable style={[styles.AmountBox,Amount==='5000'&&styles.Active]}onPress={()=>issetAmount('5000')}>
            <Text style={[Amount==='5000'?styles.ActiveText:styles.InactiveText]}>Rs.5000</Text>
          </Pressable>
          <Pressable style={[styles.AmountBox,Amount==='10000'&&styles.Active]} onPress={()=>issetAmount('10000')}>
            <Text style={[Amount==='10000'?styles.ActiveText:styles.InactiveText]}>Rs.10000</Text>
          </Pressable>
        </View>
        <TextInput
          style={styles.MoneyInput}
          placeholder='Enter the Amount'
          placeholderTextColor="#333333"
          value={Amount}
          keyboardType='Numeric'
          onChangeText={(text)=>issetAmount(text)}
        />
        <Pressable style={styles.ContributeBox}>
          <Text style={styles.COntributeText}>Contribute Now</Text>
        </Pressable>
      </View>
      <Text style={styles.MoneyDivision}>Where your money goes</Text>
      <View style={styles.DivisionConatiner}>
        <View style={styles.Division}>
          <Image source={WaterDroplet} style={styles.WaterDrop}/>
          <Text style={styles.DivisionPercent}>45%</Text>
          <Text style={styles.aim}>Clean Water</Text>
        </View>
        <View style={styles.Division}>
          <Image source={EducationHat} style={styles.EducationHat}/>
          <Text style={styles.DivisionPercent}>30%</Text>
          <Text style={styles.aim}>Education</Text>
        </View>
        <View style={styles.Division}>
          <Image source={MedicalKit} style={styles.MedicalKit}/>
          <Text style={styles.DivisionPercent}>25%</Text>
          <Text style={styles.aim}>Healthcare</Text>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default NGO

const styles = StyleSheet.create({
  Bg_Image:{
    height:250,
    width:388.4,
    borderRadius:8
  },
  Conatiner:{
    borderWidth:0.8,
    height:400,
    width:390,
    marginLeft:12,
    borderRadius:8,
  },
  IntroText:{
    marginTop:13,
    marginLeft:12,
    marginRight:7,
    fontSize:18,
    color:'#74808e',
  },
  DonationBox:{
    marginTop:15,
    borderWidth:0.8,
    borderRadius:10,
    marginLeft:11,
    height:250,
    width:390,
  },
  Choosetext:{
    marginTop:10,
    fontSize:23,
    marginLeft:7,
    fontWeight:'500',
  },
  amountChoose:{
    marginTop:7,
    marginLeft:18,
    flexDirection:'row',
    gap:10,
    flexWrap:'wrap'
  },
  AmountBox:{
    borderWidth:1,
    borderRadius:10,
    width:100,
    marginRight:12,
    height:40,
    justifyContent:'center',
    alignItems:'center'
  },
  Active:{
    borderRadius:10,
    borderWidth:0.2,
    width:100,
    backgroundColor:'#e63746',
    justifyContent:'center',
  },
  ActiveText:{
    color:'#ffffff',
    fontWeight:'bold'
  },
  MoneyInput:{
    marginLeft:10,
    borderRadius:10,
    borderWidth:0.28,
    marginTop:12,
    width:370,
    backgroundColor:'#f9f9f9AA'
  },
  ContributeBox:{
    borderWidth:0.67,
    height:43,
    marginLeft:15,
    width:360,
    marginTop:10,
    borderRadius:10,
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center',
    backgroundColor:'#e63746'
  },
  COntributeText:{
    color:'#ffffff',
    fontWeight:'800'
  },
  MoneyDivision:{
    marginTop:18,
    fontSize:25,
    fontWeight:'bold',
  },
  DivisionConatiner:{
    marginTop:10,
    gap:35
  },
  Division:{
    borderWidth:0.67,
    borderRadius:10,
    justifyContentL:'center',
    alignContent:'center',
    alignItems:'center',
    height:130,
    width:390,
    marginLeft:12,
    gap:1,
  },
  WaterDrop:{
    height:48,
    width:48,
    borderRadius:10,
    marginTop:10,
  },
  DivisionPercent:{
    fontSize:30,
    fontWeight:'900',
  },
  aim:{
    fontSize:18,
    color:'#67778d'
  },
  EducationHat:{
    height:50,
    width:50,
    marginTop:7,
    borderRadius:10,
  },
  MedicalKit:{
    height:59,
    width:59,
    marginTop:7,
    borderRadius:10,
  }
})