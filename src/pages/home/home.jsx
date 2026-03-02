import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth } from '../../Context/AuthContext'
import HomeBottomNavBar from '../../components/HomeBottomNavBar'
const home = () => {
    const {authUser}=useAuth();
  return (
    <>
    <SafeAreaView>
        <HomeBottomNavBar/>
    </SafeAreaView>
    </>
  )
}

export default home

const styles = StyleSheet.create({

})