import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DonationPageTopBar from '../../components/DonationPageTopBar'
import NavBar from '../../components/HomeBottomNavBar'
const donation = () => {
  return (
    <View style={{flex:1}}>
      <DonationPageTopBar/>
      <NavBar/>
    </View>
  )
}

export default donation

const styles = StyleSheet.create({})