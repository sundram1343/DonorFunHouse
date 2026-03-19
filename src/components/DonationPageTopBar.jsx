import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const DonationPageTopBar = () => {
  const [Selected, setisselected] = useState('UrgentNeed');
  return (
    <View style={styles.DonationConatiner}>
      <Pressable
        style={[styles.UrgnetNeed, Selected === 'UrgentNeed' && styles.Active]}
        onPress={() => setisselected('UrgentNeed')}
      >
        <Text style={[Selected==='UrgentNeed'?styles.ActiveText :styles.inactiveText]}>Urgnet</Text>
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
  );
};

export default DonationPageTopBar;

const styles = StyleSheet.create({
  DonationConatiner: {
    flexDirection: 'row',
    gap: 90,
    marginTop: 20,
    padding: 10,
    marginLeft: 7,
    borderWidth: 0.2,
    borderRadius: 10,
    width: 400,
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
  }
});
