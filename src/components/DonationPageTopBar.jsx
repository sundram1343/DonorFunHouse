import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Urgent from './Urgent';
import FundRaiser from './FundRaiser';
import { SafeAreaView } from 'react-native-safe-area-context';
import NGO from './NGO';
const DonationPageTopBar = () => {
  const renderContent =()=>{
    switch(Selected){
      case 'UrgentNeed':
        return <Urgent/>
      case 'FundRaisers':
        return <FundRaiser/>
      case 'NGO' :
        return <NGO/>
      default:
        return null;
    }
  }
  const [Selected, setisselected] = useState('UrgentNeed');
  return (
  <>
    <SafeAreaView style={{flex:1}}>
    <View style={styles.DonationConatiner}>
      <Pressable
        style={[styles.UrgnetNeed, Selected === 'UrgentNeed' && styles.Active]}
        onPress={() => setisselected('UrgentNeed')}
      >
        <Text style={[Selected==='UrgentNeed'?styles.ActiveText :styles.inactiveText]}>Blood</Text>
      </Pressable>
      <Pressable
        style={[
          styles.UrgnetNeed,
          Selected === 'FundRaisers' && styles.Active,
        ]}
        onPress={() => setisselected('FundRaisers')}
      >
        <Text style={[Selected==='FundRaisers'?styles.ActiveText :styles.inactiveText]}>FundRaiser</Text>
      </Pressable>
      <Pressable
        style={[styles.UrgnetNeed, Selected === 'NGO' && styles.Active]}
        onPress={() => setisselected('NGO')}
      >
        <Text style={[Selected==='NGO'?styles.ActiveText :styles.inactiveText]}>NGO</Text>
      </Pressable>
    </View>
    <View style={{ flex: 1, marginTop: 20 }}>
      {renderContent()}
    </View>
    </SafeAreaView>
  </>
  );
};

export default DonationPageTopBar;

const styles = StyleSheet.create({
  DonationConatiner: {
    flexDirection: 'row',
    gap: 70,
    marginTop: 20,
    padding: 10,
    marginLeft: 7,
    borderWidth: 0.2,
    borderRadius: 10,
    width: 370,
    height: 70,
  },
  UrgnetNeed: {
    marginTop: 10,
    marginLeft: 7,
  },
  Active:{
    borderRadius:10,
    borderWidth:0.2,
    width:80,
    backgroundColor:'#e63746',
    justifyContent:'center',
    marginTop:-1
  },
  ActiveText:{
    color:'#ffffff',
    textAlign:'center',
    fontWeight:'bold'
  },
});
