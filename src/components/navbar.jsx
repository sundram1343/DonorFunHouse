import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../Context/AuthContext'
import Profile from '../pages/Profile/profile'
const Navbar = () => {
  const navigation = useNavigation();
  const { IsLoggedIn } = useAuth();
  return (
    <SafeAreaView style={styles.navbar}>

      <Text style={styles.title} >DonorFunHouse</Text>
      <Pressable onPress={() => IsLoggedIn ? navigation.navigate('Profile') : navigation.navigate('Login')}>
        <Avatar.Icon
          size={40}
          icon="account"
          style={styles.avatar}
        />
      </Pressable>

    </SafeAreaView>
  )
}

export default Navbar

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',


  },
  avatar: {
    backgroundColor: '#e0e0e0',
  }
})