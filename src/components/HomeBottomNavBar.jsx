import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAuth } from '../Context/AuthContext';
import Icon1 from 'react-native-vector-icons/FontAwesome6';
import { useNavigation} from '@react-navigation/native';
const HomeBottomNavBar = () => {
  const navigation=useNavigation();
  const { authUser } = useAuth();
  return (
    <>
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Icon name="home" size={26} color="#000" />
      </Pressable>
      <Pressable onPress={()=>navigation.navigate('Search')}>
        <Icon name="search" size={26} color="#000" />
      </Pressable>
      <Pressable onPress={()=>navigation.navigate('Community')}>
        <Icon name="message-outline" size={26} color="#000"/>
      </Pressable>
      <Pressable onPress={()=> navigation.navigate('Donation')}>
        <Icon1 name="hand-holding-dollar" size={26} color="#000"/>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Profile')}>
        <Icon name={authUser ? "person" : "login"} size={26} color="#000" />
      </Pressable>
    </View>
    </>
  );
};

export default HomeBottomNavBar;

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    bottom: 0,              
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
    marginBottom:4,
    borderRadius:15,
    marginLeft:25,
    marginRight:25
  },

});