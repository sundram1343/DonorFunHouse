import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAuth } from '../Context/AuthContext';

const HomeBottomNavBar = () => {
  const { authUser } = useAuth();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log('Home pressed')}>
        <Icon name="home" size={28} color="#000" />
      </Pressable>
      <Pressable>
        <Icon name="search" size={28} color="#000" />
      </Pressable>
      <Pressable onPress={() => console.log('Profile pressed')}>
        <Icon name={authUser ? "person" : "login"} size={28} color="#000" />
      </Pressable>
    </View>
  );
};

export default HomeBottomNavBar;

const styles = StyleSheet.create({
  container: {
    bottom: 0,              
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    marginTop: 800, // Ensure the navbar stays at the bottom
  },
});