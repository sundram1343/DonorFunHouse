import { StyleSheet, Text, View ,Image,ScrollView, Pressable} from 'react-native'
import React, { useState } from 'react'
import Bg_Image from '../assets/Bg-Image-DonationPage.png'
import { TextInput } from 'react-native-gesture-handler'
const NGO = () => {
  const [Amount, issetAmount]=useState()
  return (
    <ScrollView>
      <View style={styles.Conatiner}>
        <Image source={Bg_Image} style={styles.Bg_Image}/>
        <Text style={styles.IntroText}>Our mission is to bridge the gapbetween resources and those who needthem most. From education initiatives toclean water projects, every dollar youcontribute to the DonorFunHousegeneral fund helps us respond instantly to Our Country's emergencies.</Text>
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
          onChange={(text)=>issetAmount(text)}
        />
      </View>
    </ScrollView>
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
    height:200,
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
  }
})