import { StyleSheet, Text, View,KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import DonationPageTopBar from '../../components/DonationPageTopBar'
import NavBar from '../../components/HomeBottomNavBar'
const donation = () => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <View style={{flex:1}}>
      <DonationPageTopBar/>
      <NavBar/>
    </View>
    </KeyboardAvoidingView>
  )
}

export default donation

const styles = StyleSheet.create({})