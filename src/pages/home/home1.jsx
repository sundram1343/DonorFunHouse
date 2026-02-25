import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
//import of components
import Navbar from '../../components/navbar'
import DonateOptions from '../../components/DonateOptions'
//import of images
import Herobanner from '../../assets/hero-banner.png'
import ActiveDonor from '../../assets/active-donor.png'
import DonorThisMonth from '../../assets/Money-raised-month.png'
//import of data
import CommentData from './CommentData'
const Home = () => {
    return (<>
        <SafeAreaView style={styles.navbar}>
            <Navbar />
        </SafeAreaView>
        <ScrollView>
        <SafeAreaView style={styles.intro}>
            <Text style={styles.introTitle}>
                DonorFunHouse
            </Text>
            <Text style={styles.introTag}>
                100% Transparent Giving
            </Text>
            <Text style={styles.introline}>
                Know Exactly where your money goes
            </Text>
            <Text style={styles.introduction}>
                Every rupee you donate is tracked, reported, and verified. See real-time breakdowns of how funds are allocated, spent today, and planned for the future — no hidden costs, no ambiguity
            </Text>
            <Image source={Herobanner} style={styles.hero} />
            <Image source={ActiveDonor} style={styles.activeDonor} />
            <Image source={DonorThisMonth} style={styles.donorThisMonth} />
            <View style={styles.introfeatures}>
                <Text style={styles.introfeaturesText}>Verified NGO</Text>
                <Text style={styles.introfeaturesText}>Real-time Tracking</Text>
                <Text style={styles.introfeaturesText}>Lives Impacted: 12,400+</Text>
            </View>
            <Text style={styles.DonorsCommentText}>
                What Our Users Say
            </Text>
            <SafeAreaView>
            <ScrollView horizontal={true} >
                <View style={styles.DonorsComment}>
                {CommentData.map((item) => (
                    <View key={item.id} style={styles.comment}>
                        <Text style={styles.commentName}>{item.name}</Text>
                        <Text style={styles.commentText}>{item.comment}</Text>
                    </View>
                ))}
                </View>
            </ScrollView>
            </SafeAreaView>
            <View >
                <DonateOptions />
            </View>
        </SafeAreaView>
        </ScrollView>
    </>
    )
}

export default Home

const styles = StyleSheet.create({
    intro: {
        height:1200,// todo : to give flex 1 when the homepage is completed
        backgroundColor: '#ffffffdb'
    },
    introTitle:{
        fontSize:50,
        fontWeight:'bold',
        marginTop:20,
        color:"#ac9b48ff",
        textAlign:'center',
        fontFamily:'serif'
    },
    introTag: {
        fontSize: 20,
        marginTop: 40,
        color: '#66a377',
        marginLeft: 10,
        borderColor: '#66a377',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        padding: 5,
        width: 200,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: '#c0ead754'
    },
    introline: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 50,
        fontWeight: 'bold',

    },
    introduction: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 30,
        color: '#96a296ff'
    },
    hero: {
        width: 380,
        height: 200,
        resizeMode: 'cover',
        marginHorizontal: 18,
        borderRadius:10
    },
    activeDonor: {
        height: 70,
        width: 100,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginHorizontal: 5,
        alignSelf: 'flex-end',
        marginTop: -232,
        borderRadius: 8
    },
    donorThisMonth: {
        height: 70,
        width: 110,
        marginTop: 145,
        marginHorizontal: 5,
        borderRadius: 8
    },
    introfeatures: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 10,
        color: '#66a377',
        fontWeight: 'bold',
        borderColor: '#66a377'
    },
    introfeaturesText: {
        color: '#66a377',
        fontWeight: 'bold',
        borderColor: '#66a377',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 17,
        textAlign: 'center',
        padding: 5
    },
    DonorsCommentText: {
        marginTop: 20,
        marginHorizontal: 10,
        fontWeight: 'bold',
        fontSize: 30,
    },
    DonorsComment:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    comment:{
        borderWidth:1,
        borderColor:'#66a377',
        borderRadius:10,
        padding:5,
        marginHorizontal:10,
        marginVertical:10,
        width:200,
        height:110,
    },
    commentName:{
        fontWeight:'bold',
        fontSize:25,
    },
    commentText:{
        fontSize:18,
        fontStyle:'italic',
        color:'#444b46ff'
    },

})