import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const DonationPageTopBar = () => {
    const [Selected,setisselected]=useState(null);
  return (
    <View style={styles.DonationConatiner}>
      <Pressable style={styles.UrgnetNeed}>
        <Text>Urgnet Need</Text>
      </Pressable>
      <Pressable style={styles.UrgnetNeed}>
        <Text>Active Campaigns</Text>
      </Pressable>
      <Pressable style={styles.UrgnetNeed}>
        <Text>NGO</Text>
      </Pressable>
    </View>
  )
}

export default DonationPageTopBar

const styles = StyleSheet.create({
    DonationConatiner:{
        flexDirection:'row',
        gap:70,
        marginTop:20,
        padding:10,
        marginLeft:7,
        borderWidth:1,
        borderRadius:10,
        width:400,
        height:70
    },
    UrgnetNeed:{
        marginTop:10,
        marginLeft:7,
    },

})