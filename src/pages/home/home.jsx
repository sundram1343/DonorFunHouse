import { StyleSheet, Text, View, ScrollView, Pressable,Image } from 'react-native';
import React from 'react';
import O_image from '../../assets/ONegative.png';
import { useAuth } from '../../Context/AuthContext';
import HomeBottomNavBar from '../../components/HomeBottomNavBar';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Progress from 'react-native-progress';
const home = () => {
  const { authUser } = useAuth();
  return (
    <>
      <View style={styles.container}>
        <HomeBottomNavBar />
        <View style={{flex:1}}>
          <Text style={styles.welcomeText}>Welcome, {authUser?.name || 'User'}!</Text>
          <Text style={styles.ImpactMadeText}>Impact Made</Text>
          <View style={styles.Impactcontainer}>
            <Pressable style={styles.impactbox}>
              <Text style={styles.ImpactText}>Total Donation Made</Text>
              <Text style={styles.ImpactValue}>6</Text>
            </Pressable>
            <Pressable style={styles.impactbox}>
              <Text style={styles.ImpactText}>Total Campaign</Text>
              <Text style={styles.ImpactValue}>3</Text>
            </Pressable>
          </View>
          <Text style={styles.MakeImpactText}>Make Impact</Text>
          <View style={styles.DonationContainer}>
            <Pressable style={styles.becomedonor}>
              <Icon
                name="heart"
                style={styles.HeartIcon}
                size={25}
                color="#ffff"
              />
              <Text style={styles.becomedonorText}>Become a Donor</Text>
            </Pressable>
            <Pressable style={styles.StartFund}>
              <Icon
                name="user"
                style={styles.UserIcon}
                size={25}
                color="#ffff"
              />
              <Text style={styles.StartFundText}>Start a Fundraiser</Text>
            </Pressable>
          </View>
          <Text style={styles.UrgentNeedText}>❗Urgent Need near you</Text>
          <Pressable>
            <Text style={styles.ViewAllText}>View All</Text>
          </Pressable>
          <View style={styles.urgentneedBox}>
            <View style={styles.urgentneedobject}>
              <Image source={O_image} style={styles.urgentneedimage} />
              <View style={styles.urgentneedinfo}>
              <Text style={styles.urgentneedobjecttext}>Need of Blood O-</Text>
              <View style={styles.urgentneedobjectaddress}>
                <Text style={styles.name}>City General Hospital</Text>
                <Text style={styles.distance}>2.5 km away</Text>
              </View>
              </View>
              <Pressable style={styles.urgentneedobjectdonate}>
                <Text style={styles.urgentneedobjectdonatetext}>Donate Now</Text>
              </Pressable>
            </View>
          </View>
          <Text style={styles.ActiveCampaignsText}>Active Campaigns</Text>
          <Pressable>
            <Text style={styles.ViewAllText2}>View All</Text>
          </Pressable>
          <View style={styles.ActiveCampaignsBox}>
            <View style={styles.ActievCampaignsObject}>
              <View style={styles.ActiveCampaignInfo}>
                <Text style={styles.ActiveCampaignsInfoText}>Need Monety For Operation</Text>
                <Text style={styles.ActiveCampaignsAddress}>District Health Board</Text>
              </View>
              <View style={styles.ActiveCampaignMoney}>
                <Text style={styles.MoneyRaised}>Money Raised: $500</Text>
                <Text style={styles.MoneyGoal}>Goal: $1000</Text>
              </View>
              <Progress.Bar progress={0.5} 
                width={350}    
                height={10}     
                color="#e63746" 
                borderRadius={5} 
                style={{ marginLeft: 7, marginTop: 5 }}
              />
              <Pressable style={styles.ActiveCampaignsDonateButton}>
                <Text style={styles.ActiveCampaignsDonateText}>Donate Now</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  welcomeText: {
    marginTop: 10,
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
  },
  ImpactMadeText: {
    fontSize: 28,
    fontFamily: 'bold',
    marginTop: 7,
    marginLeft: 10,
    color: '#743131',
    fontWeight: 'bold',
  },
  Impactcontainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    gap: 30,
  },
  impactbox: {
    borderWidth: 1,
    borderRadius: 10,
    height: 100,
    width: 180,
    borderColor: '#b2a8a8',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#4caf50',
    elevation: 70,
  },
  ImpactText: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    color: '#ffff',
    marginLeft: 10,
  },
  ImpactValue: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
    color: '#ffff',
  },
  MakeImpactText: {
    fontSize: 24,
    marginTop: 20,
    marginLeft: 10,
    color: '#743131',
    fontWeight: 'bold',
  },
  DonationContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 70,
    marginLeft: 10,
  },
  becomedonor: {
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 10,
    height: 120,
    width: 150,
    borderColor: '#b2a8a8',
    alignItems: 'center',
    backgroundColor: '#e63746',
    elevation: 100,
    zIndex: 10,
  },
  HeartIcon: {
    size: 15,
    marginTop: 20,
  },
  becomedonorText: {
    fontSize: 18,
    marginTop: 18,
    color: '#ffff',
  },
  StartFund: {
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 10,
    height: 120,
    width: 150,
    borderColor: '#b2a8a8',
    alignItems: 'center',
    backgroundColor: '#1d3557',
  },
  UserIcon: {
    size: 15,
    marginTop: 20,
  },
  StartFundText: {
    fontSize: 18,
    marginTop: 18,
    color: '#ffff',
  },
  UrgentNeedText: {
    marginTop: 10,
    fontSize: 28,
    marginLeft: 5,
  },
  ViewAllText: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: -25,
    fontSize: 18,
    color:'#132845',
  },
  urgentneedBox: {
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 20,
    gap:15,
  },
  urgentneedinfo:{
  flex: 1, 
  marginLeft: 10,
  },
  urgentneedobject: {
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 15,
    height: 80,
    width: 380,
    justifyContent: 'space-between',
    backgroundColor:'#594ed555',
  },
  urgentneedimage: {
    height: 50,
    width:50,
    marginTop: 10,
    marginLeft: 10,
  },
  urgentneedobjecttext: {
    fontSize: 24,
    marginRight:13
  },
  urgentneedobjectaddress: {
    flexDirection: 'row',
    gap: 10,
    marginHorizontal:-12,
    marginTop: 15,
  },
  urgentneedobjectdonate:{
    borderWidth: 1,
    borderRadius: 10,
    height:35,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 3,
    backgroundColor:'#e63746'
  },
  urgentneedobjectdonatetext:{
    marginTop:2,
    marginRight: 12,
    textAlign: 'center',
    marginLeft: 12,
    color: '#ffff',
  },
  name:{
    color:'#080808'
  },
  distance:{
    color:'#6f737f'
  },
  ViewAllText2:{
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: -25,
    fontSize: 18,
    color:'#132845',
  },
  ActiveCampaignsText:{
    marginTop: 10,
    marginLeft:10,
    fontSize: 28,
  },
  ActiveCampaignsBox:{
    marginLeft:15,
    marginTop:10,
    borderRadius:10,
    borderWidth:1,
    height:130,
    width:380,
    gap:15,
    backgroundColor:'#c0c8dc'
  },
  ActiveCampaignInfo:{
    flexDirection: 'column',
    gap: 3,
  },
  ActiveCampaignsInfoText:{
    fontSize: 25,
    marginTop: 7,
    marginLeft: 7,
  },
  ActiveCampaignsAddress:{
    marginLeft: 7,
    color:'#6f737f',
    fontsize:18,
  },
  ActiveCampaignMoney:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  MoneyRaised:{
    marginLeft:7,
    color:"#080808"
  },
  MoneyGoal:{
    color:"#080808",
    textAlign: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  progressbar:{
    marginLeft: 7,
    marginTop: 5,
    width:300,
    height:10
  }
});