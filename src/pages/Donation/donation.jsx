import { StyleSheet, Text, View,KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import DonationPageTopBar from '../../components/DonationPageTopBar'
import NavBar from '../../components/HomeBottomNavBar'
import { SafeAreaView } from 'react-native-safe-area-context'
const donation = () => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <SafeAreaView style={{flex:1}}>
      <DonationPageTopBar/>
      <NavBar/>
    </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default donation

const styles = StyleSheet.create({})