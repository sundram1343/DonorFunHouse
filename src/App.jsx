import { StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider, useAuth } from './Context/AuthContext';
import Home1 from './pages/home/home1';
import LoginSystem from './pages/LoginSystem/Loginpage'
import Profile from './pages/Profile/profile';
import SignUp from './pages/LoginSystem/Signup';
import Home from './pages/home/home';
import Search from './pages/Search/search';
import Community from './pages/Community/community';
import Donation from './pages/Donation/donation'
const Stack = createStackNavigator();
const AppNavigator = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Search"  component={Search}/>
          <Stack.Screen name="Community" component={Community}/>
          <Stack.Screen name="Donation" component={Donation}/>
        </>
      ) : (
        <>
          <Stack.Screen name="Home1" component={Home1} />
          <Stack.Screen name="Login" component={LoginSystem} />
          <Stack.Screen name="Signup" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});