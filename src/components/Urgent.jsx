import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
const Urgent = () => {
  return (
    <SafeAreaView>
      <View style={styles.NeededBlood}>
        <Text style={styles.Name}>Urgent Blood Needed</Text>
        <Pressable>
          <Text style={styles.ViewAllText}>View All</Text>
        </Pressable>
      </View>
      <ScrollView>
        <View style={styles.urgentBloodneed}>
          <Text style={styles.BloodName}>O-</Text>
          <Text style={styles.NameNeeded}>O- Negative Needed</Text>
          <View style={styles.address}>
            <Text style={styles.addressname}>City General Hospital</Text>
            <Text style={styles.dot}>.</Text>
            <Text style={styles.unit}>Unit</Text>
          </View>
          <View style={styles.DonateNow}>
            <Pressable>
              <Text style={styles.DonateNowText}>Donate Now</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <View style={styles.DonationCenterConatiner}>
        <Text style={styles.Heading}>Donation Centers</Text>
        <Pressable>
          <Text style={styles.ViewAllText}>View All</Text>
        </Pressable>
      </View>
      <ScrollView>
        <Pressable style={styles.container}>
          <Text style={styles.centername}>Red Cross City Centre</Text>
          <Text style={styles.type}>Walk in</Text>
          <Text style={styles.distance}>0.8km away</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Urgent;

const styles = StyleSheet.create({
  NeededBlood: {
    flexDirection: 'row',
    gap: 145,
    marginLeft: 5,
  },
  Name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ViewAllText: {
    fontSize: 15,
    marginTop: 5,
    color: '#132845',
  },
  urgentBloodneed: {
    marginLeft: 7,
    borderWidth: 0.5,
    borderRadius: 10,
    marginRight: 2.5,
    height: 140,
  },
  BloodName: {
    fontSize: 35,
    color: '#e63746',
    marginLeft: 7,
  },
  NameNeeded: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 7,
  },
  address: {
    flexDirection: 'row',
    gap: 5,
    marginLeft: 7,
  },
  addressname: {
    color: '#8c94a1',
  },
  dot: {
    fontSize: 28,
    color: '#8c94a1',
    marginTop: -15,
  },
  unit: {
    color: '#8c94a1',
  },
  DonateNow: {
    borderWidth: 1,
    borderRadius: 10,
    width: 360,
    height: 40,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e63746',
    marginTop: 5,
  },
  DonateNowText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  DonationCenterConatiner: {
    flexDirection: 'row',
    gap: 180,
    marginLeft: 5,
  },
  Heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    marginTop: 5,
    borderWidth: 0.5,
    borderRadius: 8,
    height: 90,
    widht: 400,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  centername: {
    fontSize: 30,
  },
  type: {
    fontSize: 15,
    color: '#8c94a1',
  },
  distance: {
    color: '#8c94a1',
  },
});
