import { StyleSheet, Text, View,ScrollView, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Progress from 'react-native-progress';
const FundRaiser = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
      <SafeAreaView>
        <Text style={styles.ActiveText}>Active Campaigns</Text>
        <View style={styles.container}>
          <Text style={styles.EmergencyType}>Medical Emergency</Text>
          <Text style={styles.name}>Heart Surgery for Mateo</Text>
          <Text style={styles.need}>Urgent support needed for 5-year old Mateo's critical cardiac procedure scheduled for next week</Text>
          <View style={styles.Money}>
          <Text style={styles.Raised}>Rs.1175000 Raised</Text>
          <Text style={styles.goal}>Goal:Rs.1,869,580.00</Text>
          </View>
          <Progress.Bar progress={0.62} 
            width={365}    
            height={10}     
            color="#e63746" 
            borderRadius={5} 
            style={{ marginLeft: 7, marginTop: 5 }}
          />
          <Pressable style={styles.Contribute}>
          <Text style={styles.ContributeText}>Contribute Now</Text>
        </Pressable>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}
export default FundRaiser 
const styles = StyleSheet.create({
  ActiveText:{
    marginLeft:8,
    fontSize:25,
    fontWeight:'bold',
  },
  container:{
    borderWidth:2,
    borderRadius:6,
    width:390,
    marginLeft:10,
    height:200,
    matginTop:10
  },
  EmergencyType:{
    marginTop:5,
    marginLeft:7,
    fontSize:18,
    color:'#da424e',
    fontWeight:'500',
  },
  name:{
    marginTop:5,
    marginLeft:8,
    fontSize:21,
    fontWeight:'600'
  },
  need:{
    marginLeft:9,
    fontSize:17,
    color:'#697484',
  },
  Money:{
    flexDirection:'row',
    marginLeft:7,
    gap:140,
  },
  Raised:{
    color:'#2f343a',
    fontWeight:'600',
  },
  goal:{
    color:'#2f343a',
    fontWeight:'600',
    marginRight:8
  },
  Contribute:{
    marginTop:12,
    borderWidth:0.2,
    borderRadius:10,
    height:45,
    width:366,
    marginLeft:10,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    backgroundColor:'#e63746',
  },
  ContributeText:{
    fontSize:20,
    color:'#ffffff',
    fontWeight:'600'
  }
})