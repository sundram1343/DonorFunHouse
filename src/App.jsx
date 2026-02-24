import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Home from './pages/home/home'

const App = () => {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})