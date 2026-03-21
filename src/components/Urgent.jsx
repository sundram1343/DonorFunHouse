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
            <Text>City General Hospiatl</Text>
            <Text>.</Text>
            <Text>Unit</Text>
          </View>
          <View style={styles.DonateNow}>
            <Pressable>
              <Text style={styles.DonateNowText}>Donate Now</Text>
            </Pressable>
          </View>
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
    marginRight:2.5,
    height:200,
  },
  BloodName:{
    fontSize:35,
    color:'#e63746',
  },
  NameNeeded:{
    fontWeight:'bold',
    fontSize:20,
  },
  address:{
    flexDirection:'row',
    gap:5
  }
});
