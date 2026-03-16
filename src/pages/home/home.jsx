import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { useAuth } from '../../Context/AuthContext';
import HomeBottomNavBar from '../../components/HomeBottomNavBar';
import Icon from 'react-native-vector-icons/AntDesign';
const home = () => {
  const { authUser } = useAuth();
  return (
    <>
      <View style={styles.container}>
        <HomeBottomNavBar />
        <View>
          <Text style={styles.welcomeText}>Welcome, {authUser?.name}!</Text>
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
          <Text style={styles.UrgentNeedText}>❗Urgent Need</Text>
          <Pressable>
            <Text style={styles.ViewAllText}>View All</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color:'#192e4b',
  },
  
});
