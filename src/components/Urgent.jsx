import { StyleSheet, Text, View,ScrollView, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context' 
import React from 'react'
const Urgent = () => {
  return (
    <SafeAreaView>
      <View style={styles.NeededBlood}>
        <Text style={styles.Name}>Urgent Blood Needed</Text>
        <Pressable>
          <Text style={styles.ViewAllText}>View All</Text>
        </Pressable>
      </View>
      <ScrollView style={styles.urgentBloodneed}>
        <Text style={styles.BloodNamr}>O-</Text>
        
        <Text>O- Negative Needed</Text>
        <View style={styles.address}>
          <Text >City General Hospiatl</Text>
          <Text>.</Text>
          <Text>Unit</Text>
        </View>     
        <View style={styles.DonateNow}>
          <Pressable>
            <Text style={styles.DonateNowText}>Donate Now</Text>
          </Pressable>
        </View>
      </ScrollView>
      <View style={styles.DonationCenterConatiner}>
        <Text>Donation Centers</Text>
        <Pressable>
          <Text>View All</Text>
        </Pressable>
      </View>
      <ScrollView>
        <Pressable>
          <Text>Red Cross City Centre</Text>
          <Text>0.8km</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Urgent

const styles = StyleSheet.create({
  NeededBlood:{
    flexDirection:'row',
    gap:145,
    marginLeft:5
  },
  Name:{
    fontSize:24,
    fontWeight:'bold'
  },
  ViewAllText:{
    fontSize:15,
    marginTop:5,
    color:'#132845',
    
  }
})