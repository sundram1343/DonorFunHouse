import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DonateOptions = () => {
  return (
    <>
    <View style={styles.container}>
    <View style={styles.heart}>  
        <Text style={{fontSize:30}}>❤️</Text>
    </View>
    <Text style={styles.Readytext}>Ready to Make a Difference?</Text>
    <View style={styles.DonationAttraction}>
        <Text style={styles.AttractionText}>Every rupee you give goes exactly where you see it. No hidden fees, no guesswork — just transparent impact.</Text>

    </View>
    <View style={styles.DonateOptions}>
      <Text style={styles.DonateNow}>Donate Now</Text>
      <Text style={styles.SeeMonthlyReport}>See Monthly Report</Text>
    </View>
    </View>
    </>
  )
}

export default DonateOptions

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#c0ead754',
        borderWidth:0.1,
        borderRadius:10,
        padding:10,
        width:400,
        marginHorizontal:8,
        height:200,
    },
    heart:{
        fontSize:30,
        marginHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        fontSize:30
    },
    Readytext:{
        fontSize:28,
        fontWeight:'bold',
        color:'#000000',
        textAlign:'center',
    },
    DonationAttraction:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
    },
    AttractionText:{
        fontSize:22,
        fontWeight:'bold',
        color:'#9ba096ff',
        textAlign:'center',
    },
    DonateOptions:{
        flexDirection:'row',
        justifyContent:'space-between',
         borderColor:'#66a377',
    },
    DonateNow:{
        marginHorizontal:10,
        fontSize:25,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0974099f',
        borderWidth:0.2,
        borderRadius:10,
        width:170,
        height:35,
    },
    SeeMonthlyReport:{
        marginHorizontal:10,
        fontSize:25,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0974099f',
        borderWidth:0.2,
        borderRadius:10,
        width:180,
        height:35,
    }
})