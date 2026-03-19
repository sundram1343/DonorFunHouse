import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const ImpactStories = () => {
  return (
    <SafeAreaView>
        <Text style={styles.ImpactStoriesText}>Impact Stories</Text>
    </SafeAreaView>
  )
}

export default ImpactStories

const styles = StyleSheet.create({
    ImpactStoriesText:{
        marginHorizontal:10,
        marginTop:20,
        fontSize:30,
        fontWeight:'bold',
    }
})